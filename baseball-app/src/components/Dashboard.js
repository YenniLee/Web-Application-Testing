import React from 'react';

const Dashboard = props => {
    function addBall() {
        props.setBalls(props.balls + 1);
        if(props.balls === 4) {
            props.setStrikes(0);
            props.setBalls(0);
        }
    };

    function addStrike() {
        props.setStrikes(props.strikes + 1);
        if(props.strikes === 3) {
            props.setStrikes(0);
            props.setBalls(0);
        }
    };

    function addHit() {
        props.setHit(props.hit + 1);
        if(props.hit > 0) {
            props.setStrikes(0);
            props.setBalls(0);
        }
    };

    function addFoul() {
        props.setFouls(props.fouls + 1);
        if(props.setStrikes < 2) {
            props.setStrikes(props.strikes + 1);
        }
    };

    function clearScore() {
        props.setBalls(0);
        props.setStrikes(0);
        props.setHit(0);
        props.setFouls(0);
    }

    return (
        <div className='dashboard'>
            <button onClick={addBall} data-testid="ballBtn">Ball</button>
            <button onClick={addStrike}>Strike</button>
            <div className='hit-foul-container'>
                <div className='count'>Hit: {props.hit}</div>
                <button onClick={addHit}>Hit</button>
                <div className='count'>Foul: {props.fouls}</div>
                <button onClick={addFoul}>Foul</button>
            </div>
            <button onClick={clearScore}>Clear</button>
             
        </div>
    )
}

export default Dashboard;