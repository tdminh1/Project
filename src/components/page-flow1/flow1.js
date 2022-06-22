import React from "react";
import '../Basis/grid.css';
import { Link } from "react-router-dom";
import Nav from '..//Navigation/nav1'; 
import './flow1.css';
import ContentsFlow1 from "./contents-flow1/contentsFlow1";
import CartFlow1 from "./cart-flow1/cartFlow1";
import CreditFlow1 from "./credit-action-flow1/creditFlow1";
import ActionFlow1 from "./credit-action-flow1/actionFlow1";
class Flow1 extends React.Component {
    render() {
        return(
            <div className="flow1">
                <Nav />
                <div className="grid wide flow1-contents">
                    <div className="header-flow1">
                        <div className="header-flow1 name">
                            <div className="header-flow1 name id">#4859340543695496594</div>
                            <div className="header-flow1 name compname">Cty TNHH MTV Mặt trời đỏ</div>
                            <Link to='/'>
                                <div className="header-flow1 button">
                                    <div className="buttontext"> Duyệt đơn </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    
                    <div className="contents-flow1">
                        <ContentsFlow1 />
                        <CartFlow1 />
                        <CreditFlow1 />
                        <ActionFlow1 />
                    </div>

                </div>

            </div>
        )
    }
}

export default Flow1;