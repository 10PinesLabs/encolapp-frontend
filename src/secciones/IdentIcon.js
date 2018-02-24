import React from 'react'
import identicons from "identicons";

/**
 * @source: https://www.npmjs.com/package/identicons-react
 */
class IdentIcon extends React.Component {

    render() {
        const width = this.props.width;
        const size = this.props.size;
        const side = width / ((size * 2) - 1);
        let color;
        const rects = [];
        identicons.generate(this.props.id, this.props, {
            start: function(value) {
                color = '#'+Math.abs(value).toString(16).substring(0, 6)
            },
            rect: function(x, y) {
                const rect = React.createElement('rect', {
                    key: String(rects.length),
                    x: String(Math.floor(x * side)),
                    y: String(Math.floor(y * side)),
                    width: String(Math.ceil(side)),
                    height: String(Math.ceil(side)),
                    style: {fill: color}
                });
                rects.push(rect)
            },
            end: function() {
            }
        });

        return <svg width={width} height={width}>{rects}</svg>
    }
}

export default IdentIcon;