import '../../css/faultpage.css';
import moment from 'moment';
import React, { useState, useCallback } from 'react';

import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
import img4 from '../../images/img4.jpg';

import img5 from '../../images/img5.jpg';
import img6 from '../../images/img6.jpg';
import img7 from '../../images/img7.jpg';
import img8 from '../../images/img8.jpg';

import img9 from '../../images/img9.jpg';
import img10 from '../../images/img10.jpg';
import img11 from '../../images/img11.jpg';
import img12 from '../../images/img12.jpg';

import ImageViewer from 'react-simple-image-viewer';

interface Props {
  summary: string,
  description: string,
  year: number,
  area: string,
  priceToFix: number,
  faultLogged: string,
  rating: number,
  imageIndex: number
}

const FaultItem: React.FC<Props> = ({
  summary,
  description,
  year,
  area,
  priceToFix,
  faultLogged,
  rating,
  imageIndex,
}) => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [isViewerOpen, setIsViewerOpen] = useState<boolean>(false);
  const [expand, setExpand] = useState<boolean>(false);
  const [faultRating, setFaultRating] = useState<number>(rating);

  const handleRatingChange = (upOrDown: string) => {
    if (upOrDown === 'up') {
      setFaultRating(faultRating + 1);
    } else {
      setFaultRating(faultRating - 1);
    }
  };

  const images = [
    [img1],
    [img5, img6, img7, img8],
    [img9, img10, img11, img12],
  ];

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  let setBorder = () => {
    switch (true) {
      case faultRating < 10:
        return `entire-container col glass green`;
        break
      case faultRating < 50:
        return `entire-container col glass orange`;
        break
      default:
        return `entire-container col glass red`;
    }
  };


  let setRatingColour = () => {
    switch (true) {
      case faultRating < 10:
        return `icn-green`;
        break
      case faultRating < 50:
        return `icn-orange`;
        break
      default:
        return `icn-red`;
    }
  };




  return (
    <div className={setBorder()} data-testid="FaultItemContainer">
      <div className="counter-section">
        <div>
          <i
            data-testid="upVote"
            className="fas fa-arrow-up fa-lg icn"
            onClick={() => handleRatingChange('up')}
          ></i>
        </div>

        <div>
          <p data-testid="rating" className={setRatingColour()}>{faultRating}</p>
        </div>
        <div>
          <i
            data-testid="downVote"
            className="fas fa-arrow-down fa-lg icn"
            onClick={() => handleRatingChange('down')}
          ></i>
        </div>
      </div>

      {!expand ? (
        <div className="main-fault-section ">
          <h4 className='fault-item-detail'>Summary: {summary}</h4>
          <p className='fault-item-detail'>Price to fix: £{priceToFix}</p>
        </div>
      ) : (
        <div className="expanded-container ">
          <div className="expanded-text">
            <p className='fault-item-detail'>Summary: {summary}</p>
            <p className='fault-item-detail'>Price to fix: £{priceToFix}</p>
            <p className='fault-item-detail'>Area of fault: {area}</p>
            <p className='fault-item-detail'>Build year: {year}</p>
            <p className='fault-item-detail'>Description: {description}</p>
            <p className='fault-item-detail'>
              Reported on:{' '}
              {moment(faultLogged).format('MMMM Do YYYY, h:mm:ss a')}
            </p>
          </div>

          <div className="image-section">
            {images[imageIndex].map((src, index) => (
              <img
                className="image-thumbnail"
                src={src}
                onClick={() => openImageViewer(index)}
                width="200px"
                key={index}
                alt=""
              />
            ))}

            {isViewerOpen && (
              <ImageViewer
                src={images[0]}
                currentIndex={currentImage}
                onClose={closeImageViewer}
              />
            )}
          </div>
        </div>
      )}

      <div className="right-fault-section">
        {expand ? (
          <i
            className="fas fa-arrow-circle-up arrow fa-3x"
            onClick={() => setExpand(!expand)}
          ></i>
        ) : (
          <i
            data-testid="dropDownBtn"
            className="fas fa-arrow-circle-down arrow fa-3x"
            onClick={() => setExpand(!expand)}
          ></i>
        )}
      </div>
    </div>
  );
};

export default FaultItem;
