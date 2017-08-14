var React = require("react");
var Link = require("react-router-dom").Link;

class Home extends React.Component{
    render(){
        return(
            <div className="home-container">
                <div className="parallax-container">
                    <div className="parallax">
                        <img src="assets/images/taco-header.jpg" />
                    </div>
                </div>

                <div className="section white black-text">
                    <div className="row container">
                        <h1 className="header">Taco Radar</h1>
                        <h3>It's not Tex-Mex it's Mex-Mex</h3>
                        <p>Welcome to the Taco Radar a place where you can find the nearest and finest real mexican flavored tacos in San Antonio, Texas. If you ever wonder how a real taco taste like, you can give it a shot and see for yourself.</p>
                    </div>
                </div>

                <div className="parallax-container">
                    <div className="parallax">
                        <img src="assets/images/pozole-header.jpg"/>
                    </div>
                </div>

            </div>
        )
    }
}

module.exports = Home;