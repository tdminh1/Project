import React from "react";
import '../Basis/grid.css';
import { Link } from "react-router-dom";
import Nav from '..//Navigation/nav'; 
import './flow1.css';


class Flow1 extends React.Component {
    render() {
        return(
            <div className="flow1">
                <Nav />
                <div className="grid wide flow1-contents">

                    <div className="header-flow1">
                        <span>Cty TNHH MTV Mặt trời đỏ</span>
                        <Link to='/'>
                            <button>Duyệt đơn</button>
                        </Link>
                    </div>
                    
                    <div className="contents-flow1">
                        <span className="">Contents List in FLOW1</span>
                    </div>

                </div>

            </div>
        )
    }
}

export default Flow1;