import React from 'react';

import {Players} from './../api/players';

export default class AddPlayer extends React.Component {
    handleSubmit(e) {
        let playerName = e.target.playerName.value;

        // prevent the page to refresh
        e.preventDefault();

        // verify if playerName is not empty
        if (playerName) {
            // reset input
            e.target.playerName.value = '';
            // insert player to db
            Players.insert({
                name: playerName,
                score: 0
            });
        }
    }

    render() {
        return (
            <div className="item">
                <form className="form" onSubmit={this.handleSubmit.bind(this)}>
                    <input className="form__input" type="text" name="playerName" placeholder="Player name" />
                    <button className="button">Add Player</button>
                </form>
            </div>
        );
    }
}
