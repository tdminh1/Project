import React from "react";
import '../Basis/grid.css';
import { Link } from "react-router-dom";
import Nav from '../Navigation/nav'; 
import './flow2.css';
import ContentsFlow2 from "./contents-flow2/contentsFlow2";

class Flow2 extends React.Component {
    render() {
        return(
            <div className="flow2">
                <Nav />
                <div className="grid wide flow2-contents">
                    <div className="header">
                        <div className="header__search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                <g id="Group_17769" data-name="Group 17769" transform="translate(-51 -105)">
                                    <rect id="Rectangle_5105" data-name="Rectangle 5105" width="14" height="14" transform="translate(51 105)" fill="none"/>
                                    <g id="search-interface-symbol" transform="translate(51 105)">
                                    <g id="_x34__4_">
                                        <g id="Group_11619" data-name="Group 11619">
                                        <path id="Path_15839" data-name="Path 15839" d="M13.873,13.238,10.259,9.682A5.717,5.717,0,0,0,11.787,5.8,5.844,5.844,0,0,0,5.9,0,5.844,5.844,0,0,0,.006,5.8a5.844,5.844,0,0,0,5.89,5.8A5.924,5.924,0,0,0,9.6,10.3l3.629,3.571a.458.458,0,0,0,.641,0A.441.441,0,0,0,13.873,13.238ZM5.9,10.7A4.945,4.945,0,0,1,.912,5.8,4.945,4.945,0,0,1,5.9.892,4.945,4.945,0,0,1,10.88,5.8,4.945,4.945,0,0,1,5.9,10.7Z" transform="translate(-0.006 0)" fill="#8f9398"/>
                                        </g>
                                    </g>
                                    </g>
                                </g>
                            </svg>
                            <input></input>
                        </div>

                        <div className="header__nav">
                            <a class="nav-icon" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                    <g id="Group_12824" data-name="Group 12824" transform="translate(-13146 1664)">
                                        <rect id="Rectangle_5975" data-name="Rectangle 5975" width="14" height="14" transform="translate(13146 -1664)" fill="none"/>
                                        <g id="kanban_1_" data-name="kanban (1)" transform="translate(13146 -1662.852)">
                                        <path id="Path_16250" data-name="Path 16250" d="M0,191.035H1.5a1.506,1.506,0,0,0,1.5-1.5V188H0Zm.82-2.215H2.187v.711a.684.684,0,0,1-.684.684H.82Z" transform="translate(0 -184.008)" fill="#007fff"/>
                                        <path id="Path_16251" data-name="Path 16251" d="M200,191.035h1.531a1.506,1.506,0,0,0,1.5-1.5V188H200Zm.82-2.215h1.395v.711a.684.684,0,0,1-.684.684h-.711Z" transform="translate(-194.531 -184.008)" fill="#007fff"/>
                                        <path id="Path_16252" data-name="Path 16252" d="M200,332.035h1.531a1.506,1.506,0,0,0,1.5-1.5V329H200Zm.82-2.215h1.395v.711a.684.684,0,0,1-.684.684h-.711Z" transform="translate(-194.531 -321.152)" fill="#007fff"/>
                                        <path id="Path_16253" data-name="Path 16253" d="M10.145,42h-.82v2.347H4.648V42h-.82v2.347H0v.82H3.828V53.7h.82V45.168H9.324V53.7h.82V45.168H14v-.82H10.145Z" transform="translate(0 -42)" fill="#007fff"/>
                                        <path id="Path_16254" data-name="Path 16254" d="M401,191.035h1.8a1.232,1.232,0,0,0,1.23-1.23V188H401Zm.82-2.215h1.395v.984a.411.411,0,0,1-.41.41h-.984Z" transform="translate(-390.035 -184.008)" fill="#007fff"/>
                                        <path id="Path_16255" data-name="Path 16255" d="M200,68h3.035v.82H200Z" transform="translate(-194.531 -67.289)" fill="#007fff"/>
                                        <path id="Path_16256" data-name="Path 16256" d="M401,68h3.035v.82H401Z" transform="translate(-390.035 -67.289)" fill="#007fff"/>
                                        <path id="Path_16257" data-name="Path 16257" d="M0,68H3.035v.82H0Z" transform="translate(0 -67.289)" fill="#007fff"/>
                                        </g>
                                    </g>
                                </svg>
                                Thẻ
                            </a>
                            <a class="nav-icon" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                    <g id="Group_12825" data-name="Group 12825" transform="translate(-12 -12)">
                                        <rect id="Rectangle_5976" data-name="Rectangle 5976" width="14" height="14" transform="translate(12 12)" fill="none"/>
                                        <g id="list" transform="translate(12 13.75)">
                                        <path id="Path_16112" data-name="Path 16112" d="M6.583,5.167h9.333a.583.583,0,1,0,0-1.167H6.583a.583.583,0,0,0,0,1.167Z" transform="translate(-2.5 -3.417)" fill="#717171"/>
                                        <path id="Path_16113" data-name="Path 16113" d="M15.917,11H6.583a.583.583,0,0,0,0,1.167h9.333a.583.583,0,1,0,0-1.167Z" transform="translate(-2.5 -6.333)" fill="#717171"/>
                                        <path id="Path_16114" data-name="Path 16114" d="M15.917,18H6.583a.583.583,0,0,0,0,1.167h9.333a.583.583,0,1,0,0-1.167Z" transform="translate(-2.5 -9.25)" fill="#717171"/>
                                        <circle id="Ellipse_1597" data-name="Ellipse 1597" cx="1.167" cy="1.167" r="1.167" fill="#717171"/>
                                        <circle id="Ellipse_1598" data-name="Ellipse 1598" cx="1.167" cy="1.167" r="1.167" transform="translate(0 4.083)" fill="#717171"/>
                                        <circle id="Ellipse_1599" data-name="Ellipse 1599" cx="1.167" cy="1.167" r="1.167" transform="translate(0 8.167)" fill="#717171"/>
                                        </g>
                                    </g>
                                </svg>
                                Bảng
                            </a>
                            <Link  ink to='/flow1'>
                                <button>Tạo đơn</button>
                            </Link> 
                        </div>   
                    </div>                    
                    
                    <div className="container">
                        <div className="container__category">
                            <div className="row sm-gutter container__category-position">
                                <div className="col l-2-4 m-0 c-0">
                                    <div className="container__category-list">Chờ duyệt</div>
                                </div>
                                <div className="col l-2-4 m-0 c-0">
                                    <div className="container__category-list container__category-list--active">Đóng gói</div>
                                </div>
                                <div className="col l-2-4 m-0 c-0">
                                    <div className="container__category-list">Vận chuyển</div>
                                </div>
                                <div className="col l-2-4 m-0 c-0">
                                    <div className="container__category-list">Trả hàng</div>
                                </div>
                                <div className="col l-2-4 m-0 c-0">
                                    <div className="container__category-list">Huỷ đơn</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row sm-gutter container-flow2">
                            <div className="col l-3 m-6 c-12">
                                <div className="container__list">
                                    <div className="container__list-title">
                                        <span>CHỜ ĐÓNG GÓI</span>
                                        <span>8 đơn</span>
                                    </div>
                                    <div className="container__list-item">
                                        <ContentsFlow2 />                                    
                                        <ContentsFlow2 />                                    
                                        <ContentsFlow2 />                                    
                                        <ContentsFlow2 />                                    
                                        <ContentsFlow2 />                                    
                                        <ContentsFlow2 />                                    
                                        <ContentsFlow2 />                                    
                                        <ContentsFlow2 />
                                    </div>
                                </div>
                            </div>
                            <div className="col l-3 m-6 c-12">
                                <div className="container__list">
                                    <div className="container__list-title">
                                        <span>CHỨNG TỪ</span>
                                        <span>2 đơn</span>
                                    </div>
                                    <div className="container__list-item">
                                        <ContentsFlow2 />                                    
                                        <ContentsFlow2 />   
                                    </div>                                   
                                </div>
                            </div>
                            <div className="col l-3 m-6 c-12">
                                <div className="container__list">
                                    <div className="container__list-title">
                                        <span>SOẠN HÀNG</span>
                                        <span>1 đơn</span>
                                    </div>
                                    <div className="container__list-item">
                                        <ContentsFlow2 />  
                                    </div>                                   
                                </div>
                            </div>
                            <div className="col l-3 m-6 c-12">
                                <div className="container__list">
                                    <div className="container__list-title">
                                        <span>ĐÃ ĐÓNG GÓI</span>
                                        <span>1 đơn</span>
                                    </div>
                                    <div className="container__list-item">
                                        <ContentsFlow2 />      
                                    </div>                                 
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                
            </div>
        )
    }
}

export default Flow2;
