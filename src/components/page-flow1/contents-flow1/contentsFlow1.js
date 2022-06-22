import React from "react";
import './contentsFlow1.css';


// function myFunction() {
//     document.getElementById("list").style.display = 'block';
// }

class ContentsFlow1 extends React.Component {
    
    render() {
        return(
            <div className="contentsflow1">
                <div className="category-container">
                    <div id="list" className="row container-category-position">
                        <div className="list1">
                            <p className="text1">Đơn hàng</p>
                        </div>
                        <div className="list2">
                            <div className="text2">Vận chuyển</div>
                        </div>
                        <div className="list3">
                            <div className="text1">Chứng từ</div>
                        </div>
                    </div>
                </div>
                <div className="detail-container">
                    <div className="detail-container block1">
                    </div>
                    <div className="detail-container block1-1">
                    </div>
                    <div className="detail-container block2">
                    </div>

                </div>
            
            </div>
            
            
        )
    }
}

export default ContentsFlow1;