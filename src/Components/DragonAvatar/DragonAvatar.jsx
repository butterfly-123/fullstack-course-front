import React, { Component } from 'react';
import styles from './DragonAvatar.module.css';
import { patchy, plain, skinny, slender, sporty, spotted, stocky, striped  } from '../Shared/Icons/Img/index';


const propertyMap = {
    backgroundColor: { orange: '#FF8C00', pink: '#FF69B4', green: '#008000',blue: '#87CEFA'},
    built: { sporty, skinny, stocky, slender },
    pattern: { plain, striped, spotted, patchy },
    size: { big: 150, small: 50, medium: 100, large: 200 }
}

class DragonAvatar extends Component {
    get DragonImage() {
        const dragonPropertyMap = {};
        const { traits } = this.props;

        if (!traits) return null;

        traits.forEach(trait => {
            const { traitType, traitValue } = trait;

            dragonPropertyMap[traitType] = propertyMap[traitType][traitValue];
        });

        const { backgroundColor, built, pattern, size} = dragonPropertyMap;

        const sizing = {
            width: size,
            height: size
        }

        return(
            <div className={styles.dragonAvatarImageWrapper}>
                <div
                    style={{backgroundColor, ...sizing}}
                    className={styles.dragonAvatarImageBackground}>
                </div>
                <img
                    style={{...sizing}}
                    src={pattern}
                    className={styles.dragonAvatarImagePattern}
                />
                <img
                    style={{...sizing}}
                    src={built}
                    className={styles.dragonAvatarImage}
                />
            </div>
        )
    }

    render() {
        return(
            <div>
                <div className={styles.traitsContainer}>
                    {this.DragonImage}
                </div>
            </div>
        );
    };
}

export default DragonAvatar;

// export default connect(
//     ({language}) => ({language}),
//     null
// )(DragonAvatar);

