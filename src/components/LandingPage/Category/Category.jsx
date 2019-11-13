import React from 'react';
import './category.scss';

const Category = () => (
  <>
    <div className="category">
      <div className="category-header">
        <div className="category-title1">
          <h2>Sites of the day</h2>
          <span>Previous Winners</span>
        </div>
        <div className="category-title2">
          <h2>Mobile Excellence</h2>
          <span>Site of the week</span>
        </div>
      </div>
      <div className="category-boxes">
        <div className="category-box">
          <div className="category-box-image">
            <img width="330" height="220" src={`https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`} alt="FIASCODESIGN" />
          </div>
          <div className="category-box-text">
            <div className="category-text-title">
              <p>Bruno Simon Portfolio</p>
            </div>
            <div className="category-text-description">
              <div className="category-text-location">
                <p>From France</p>
              </div>
              <div className="category-text-date">
                <p>October 31, 2019</p>
              </div>
            </div>
            <div className="category-owner">
              <div className="category-owner-image">
                <img src={`https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`} alt="FIASCODESIGN" />
              </div>
              <div className="category-owner-name">
                BY
                {' '}
                <span>BRUNO SIMON</span>
              </div>
            </div>
          </div>
        </div>
        <div className="category-box">
          <div className="category-box-image">
            <img width="330" height="220" src={`https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`} alt="FIASCODESIGN" />
          </div>
          <div className="category-box-text">
            <div className="category-text-title">
              <p>Castor &amp; Pollux</p>
            </div>
            <div className="category-text-description">
              <div className="category-text-location">
                <p>From France</p>
              </div>
              <div className="category-text-date">
                <p>October 31, 2019</p>
              </div>
            </div>
            <div className="category-owner">
              <div className="category-owner-image">
                <img src={`https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`} alt="FIASCODESIGN" />
              </div>
              <div className="category-owner-name">
                BY
                {' '}
                <span>CASTOR &amp; POLLUX</span>
              </div>
            </div>
          </div>
        </div>
        <div className="category-box">
          <div className="category-box-image">
            <img width="330" height="220" src={`https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`} alt="FIASCODESIGN" />
          </div>
          <div className="category-box-text">
            <div className="category-text-title">
              <p>Arts Leeds</p>
            </div>
            <div className="category-text-description">
              <div className="category-text-location">
                <p>From United Kingdom</p>
              </div>
              <div className="category-text-date">
                <p>October 31, 2019</p>
              </div>
            </div>
            <div className="category-owner">
              <div className="category-owner-image">
                <img src={`https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`} alt="FIASCODESIGN" />
              </div>
              <div className="category-owner-name">
                BY
                {' '}
                <span>LUCKYDUCK</span>
              </div>
            </div>
          </div>
        </div>
        <div className="category-box">
          <div className="category-box-image">
            <img width="330" height="220" src={`https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`} alt="FIASCODESIGN" />
          </div>
          <div className="category-box-text">
            <div className="category-text-title">
              <p>Fishing the Feed</p>
            </div>
            <div className="category-text-description">
              <div className="category-text-location">
                <p>From United Kingdom</p>
              </div>
              <div className="category-text-date">
                <p>October 31, 2019</p>
              </div>
            </div>
            <div className="category-owner">
              <div className="category-owner-image">
                <img src={`https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`} alt="FIASCODESIGN" />
              </div>
              <div className="category-owner-name">
                BY
                {' '}
                <span>FIASCODESIGN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="category">
      <div className="category-header">
        <div className="category-title1">
          <h2>Nominees</h2>
          <span>We need your vote</span>
        </div>
      </div>
      <div className="category-boxes">
        <div className="category-box">
          <div className="category-box-image">
            <img width="330" height="220" src={`https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`} alt="FIASCODESIGN" />
          </div>
          <div className="category-box-text">
            <div className="category-text-title">
              <p>Trip in the dark</p>
            </div>
            <div className="category-text-description">
              <div className="category-text-location">
                <p>From Russia</p>
              </div>
              <div className="category-text-date">
                <p>October 31, 2019</p>
              </div>
            </div>
            <div className="category-owner">
              <div className="category-owner-image">
                <img src={`https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`} alt="FIASCODESIGN" />
              </div>
              <div className="category-owner-name">
                BY
                {' '}
                <span>VOSKHOD.DIGITAL</span>
              </div>
            </div>
          </div>
        </div>
        <div className="category-box">
          <div className="category-box-image">
            <img width="330" height="220" src={`https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`} alt="FIASCODESIGN" />
          </div>
          <div className="category-box-text">
            <div className="category-text-title">
              <p>Lounge Lizard</p>
            </div>
            <div className="category-text-description">
              <div className="category-text-location">
                <p>From United States</p>
              </div>
              <div className="category-text-date">
                <p>October 31, 2019</p>
              </div>
            </div>
            <div className="category-owner">
              <div className="category-owner-image">
                <img src={`https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`} alt="FIASCODESIGN" />
              </div>
              <div className="category-owner-name">
                BY
                {' '}
                <span>LOUNGE</span>
              </div>
            </div>
          </div>
        </div>
        <div className="category-box">
          <div className="category-box-image">
            <img width="330" height="220" src={`https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`} alt="FIASCODESIGN" />
          </div>
          <div className="category-box-text">
            <div className="category-text-title">
              <p>Crafted</p>
            </div>
            <div className="category-text-description">
              <div className="category-text-location">
                <p>From United States</p>
              </div>
              <div className="category-text-date">
                <p>October 31, 2019</p>
              </div>
            </div>
            <div className="category-owner">
              <div className="category-owner-image">
                <img src={`https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`} alt="FIASCODESIGN" />
              </div>
              <div className="category-owner-name">
                BY
                {' '}
                <span>CRAFTED</span>
              </div>
            </div>
          </div>
        </div>
        <div className="category-box">
          <div className="category-box-image">
            <img width="330" height="220" src={`https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`} alt="FIASCODESIGN" />
          </div>
          <div className="category-box-text">
            <div className="category-text-title">
              <p>Neuebel &amp; Mark</p>
            </div>
            <div className="category-text-description">
              <div className="category-text-location">
                <p>From Indonesia</p>
              </div>
              <div className="category-text-date">
                <p>October 31, 2019</p>
              </div>
            </div>
            <div className="category-owner">
              <div className="category-owner-image">
                <img src={`https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`} alt="FIASCODESIGN" />
              </div>
              <div className="category-owner-name">
                BY
                {' '}
                <span>FIRMAN SUCI ANANDA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="category">
      <div className="category-header">
        <div className="category-title1">
          <h2>Resources</h2>
          <span>Stuff Digital Designers Love</span>
        </div>
      </div>
      <div className="category-boxes">
        <div className="category-box">
          <div className="category-box-image">
            <img width="330" height="220" src={`https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`} alt="FIASCODESIGN" />
          </div>
          <div className="category-box-text">
            <div className="category-text-title">
              <p>Minas Designs</p>
            </div>
            <div className="category-text-description">
              <div className="category-text-location">
                <p>From Greece</p>
              </div>
              <div className="category-text-date">
                <p>October 31, 2019</p>
              </div>
            </div>
            <div className="category-owner">
              <div className="category-owner-image">
                <img src={`https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`} alt="FIASCODESIGN" />
              </div>
              <div className="category-owner-name">
                BY
                {' '}
                <span>KOMMIGRAPHICS</span>
              </div>
            </div>
          </div>
        </div>
        <div className="category-box">
          <div className="category-box-image">
            <img width="330" height="220" src={`https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`} alt="FIASCODESIGN" />
          </div>
          <div className="category-box-text">
            <div className="category-text-title">
              <p>Mosaert store</p>
            </div>
            <div className="category-text-description">
              <div className="category-text-location">
                <p>From Belgium</p>
              </div>
              <div className="category-text-date">
                <p>October 31, 2019</p>
              </div>
            </div>
            <div className="category-owner">
              <div className="category-owner-image">
                <img src={`https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`} alt="FIASCODESIGN" />
              </div>
              <div className="category-owner-name">
                BY
                {' '}
                <span>KINGSIZE</span>
              </div>
            </div>
          </div>
        </div>
        <div className="category-box">
          <div className="category-box-image">
            <img width="330" height="220" src={`https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`} alt="FIASCODESIGN" />
          </div>
          <div className="category-box-text">
            <div className="category-text-title">
              <p>Fishing the Feed</p>
            </div>
            <div className="category-text-description">
              <div className="category-text-location">
                <p>From United Kingdom</p>
              </div>
              <div className="category-text-date">
                <p>October 31, 2019</p>
              </div>
            </div>
            <div className="category-owner">
              <div className="category-owner-image">
                <img src={`https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`} alt="FIASCODESIGN" />
              </div>
              <div className="category-owner-name">
                BY
                {' '}
                <span>FIASCODESIGN</span>
              </div>
            </div>
          </div>
        </div>
        <div className="category-box">
          <div className="category-box-image">
            <img width="330" height="220" src={`https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`} alt="FIASCODESIGN" />
          </div>
          <div className="category-box-text">
            <div className="category-text-title">
              <p>Trevor Blount</p>
            </div>
            <div className="category-text-description">
              <div className="category-text-location">
                <p>From United Kingdom</p>
              </div>
              <div className="category-text-date">
                <p>October 31, 2019</p>
              </div>
            </div>
            <div className="category-owner">
              <div className="category-owner-image">
                <img src={`https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`} alt="FIASCODESIGN" />
              </div>
              <div className="category-owner-name">
                BY
                {' '}
                <span>TREVOR BLOUNT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="category-button">
      <button type="button">Load More</button>
    </div>
  </>
);
export default Category;
