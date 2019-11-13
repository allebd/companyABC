import React from 'react';
import './banner.scss';

const Slider = () => (
  <>
    <section id="banner" style={{ backgroundImage: `url(https://picsum.photos/800/800/?image=${Math.floor((Math.random() * 85))})` }}>
      <div className="banner-gradient">
        <div className="banner-text">
          <div className="banner-date">
            <p>
              Site of the Day
              {' '}
              <span>November 8, 2019</span>
            </p>
          </div>
          <div className="banner-share">
            <div>
              <i className="fas fa-share-alt" />
            </div>
          </div>
          <div className="banner-owner">
            <div className="box-info">
              <div className="row">
                <h2 className="heading-large"><a href="#">D.POTFER STUDIO</a></h2>
              </div>
              <div className="row">
                <div className="by">
                  by
                  {' '}
                  <strong>
                    <a href="#">D.Potfer Studio</a>
                  </strong>
                  {' '}
                  from
                  {' '}
                  <strong>France</strong>
                  {' '}
                  with
                  {' '}
                  <strong>7.59</strong>
                </div>
              </div>
              <div className="box-notesite js-notes">
                <ul>
                  <li className="circle-note-progress style-design" data-note="7.89">
                    <div className="circle">
                      <svg width="84" height="84">
                        <circle r="38" cy="41" cx="41" />
                        <circle r="38" cy="41" cx="41" strokeLinejoin="round" strokeLinecap="round" className="circle-progress" style={{ animation: "900ms ease 0s 1 normal forwards running donut-show-0" }} />
                      </svg>
                      <div className="percent">
                        <span className="int">7</span>
                        <span className="dec">.89</span>
                      </div>
                    </div>
                    <div className="legend">DESIGN</div>
                  </li>
                  <li className="circle-note-progress style-usability" data-note="7.17">
                    <div className="circle">
                      <svg width="84" height="84">
                        <circle r="38" cy="41" cx="41" />
                        <circle r="38" cy="41" cx="41" strokeLinejoin="round" strokeLinecap="round" className="circle-progress" style={{ animation: "900ms ease 0s 1 normal forwards running donut-show-1" }} />
                      </svg>
                      <div className="percent">
                        <span className="int">7</span>
                        <span className="dec">.17</span>
                      </div>
                    </div>
                    <div className="legend">USABILITY</div>
                  </li>
                  <li className="circle-note-progress style-creativity" data-note="7.78">
                    <div className="circle">
                      <svg width="84" height="84">
                        <circle r="38" cy="41" cx="41" />
                        <circle r="38" cy="41" cx="41" strokeLinejoin="round" strokeLinecap="round" className="circle-progress" style={{ animation: "900ms ease 0s 1 normal forwards running donut-show-2" }} />
                      </svg>
                      <div className="percent">
                        <span className="int">7</span>
                        <span className="dec">.78</span>
                      </div>
                    </div>
                    <div className="legend">CREATIVITY</div>
                  </li>
                  <li className="circle-note-progress style-content" data-note="7.25">
                    <div className="circle">
                      <svg width="84" height="84">
                        <circle r="38" cy="41" cx="41" />
                        <circle r="38" cy="41" cx="41" strokeLinejoin="round" strokeLinecap="round" className="circle-progress" style={{ animation: "900ms ease 0s 1 normal forwards running donut-show-3" }} />
                      </svg>
                      <div className="percent">
                        <span className="int">7</span>
                        <span className="dec">.25</span>
                      </div>
                    </div>
                    <div className="legend">CONTENT</div>
                  </li>
                  <li className="circle-note-progress style-mobile" data-note="7.70">
                    <div className="tooltip">
                      <div className="box-circle">
                        <div className="circle">
                          <svg width="84" height="84">
                            <circle r="38" cy="41" cx="41" />
                            <circle r="38" cy="41" cx="41" strokeLinejoin="round" strokeLinecap="round" className="circle-progress" style={{ animation: "900ms ease 0s 1 normal forwards running donut-show-4" }} />
                          </svg>
                          <div className="percent">
                            <span className="int">7</span>
                            <span className="dec">.70</span>
                          </div>
                        </div>
                        <div className="legend">MOBILE</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="banner-actions" >
            <button type="button" className="green-fill">Visit Site</button>
            <button type="button">Collect</button>
          </div>
          <div className="banner-jury" >
            <div>
              <button type="button">Jury votes</button>
            </div>
            <div className="box-users-likes">
              <ul className="list-users">
                <li>
                  <div className="item js-judge-note" data-username="pedro.burneiko" data-info="{&quot;country&quot;:{&quot;name&quot;:&quot;Brazil&quot;},&quot;displayName&quot;:&quot;Pedro Burneiko&quot;,&quot;score&quot;:&quot;9.40&quot;}">
                    <a href="#">
                      <img src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/295353/570f5d117d53f.jpg" data-src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/295353/570f5d117d53f.jpg" width="34" height="34" alt="Pedro Burneiko" className="grayscale lazy lazy-loaded" />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="item js-judge-note" data-username="alextchristian" data-info="{&quot;country&quot;:{&quot;name&quot;:&quot;United States&quot;},&quot;displayName&quot;:&quot;Alex Christian&quot;,&quot;score&quot;:&quot;7.20&quot;}">
                    <a href="#">
                      <img src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/191427/5c49dcf061874.jpg" data-src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/191427/5c49dcf061874.jpg" width="34" height="34" alt="Alex Christian" className="grayscale lazy lazy-loaded" />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="item js-judge-note" data-username="marie-benoist" data-info="{&quot;country&quot;:{&quot;name&quot;:&quot;Australia&quot;},&quot;displayName&quot;:&quot;Marie Benoist&quot;,&quot;score&quot;:&quot;7.30&quot;}">
                    <a href="#">
                      <img src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/323238/58a4474351c17.jpg" data-src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/323238/58a4474351c17.jpg" width="34" height="34" alt="Marie Benoist" className="grayscale lazy lazy-loaded" />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="item js-judge-note" data-username="sunnyrathod" data-info="{&quot;country&quot;:{&quot;name&quot;:&quot;India&quot;},&quot;displayName&quot;:&quot;Sunny Rathod&quot;,&quot;score&quot;:&quot;7.60&quot;}">
                    <a href="#">
                      <img src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/460409/5c49d98fe0ac2.jpg" data-src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/460409/5c49d98fe0ac2.jpg" width="34" height="34" alt="Sunny Rathod" className="grayscale lazy lazy-loaded" />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="item js-judge-note" data-username="Shunsuke" data-info="{&quot;country&quot;:{&quot;name&quot;:&quot;Japan&quot;},&quot;displayName&quot;:&quot;Shunsuke Iseki&quot;,&quot;score&quot;:&quot;7.30&quot;}">
                    <a href="#">
                      <img src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/460760/58a5b3fd8f0b0.jpg" data-src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/460760/58a5b3fd8f0b0.jpg" width="34" height="34" alt="Shunsuke Iseki" className="grayscale lazy lazy-loaded" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);
export default Slider;
