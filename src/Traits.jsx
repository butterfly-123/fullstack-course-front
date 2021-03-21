import React, { Component } from 'react';

class Traits extends Component {
    render() {
        const { traits } = this.props;

        return(
            <div>
                {
                    <div className='traits-value'>
                        <ul>
                            {traits.map(trait =>
                                <li>{trait.traitValue}</li>
                            )}
                        </ul>
                    </div>
                }
            </div>
        )
    }
}

export default Traits;

