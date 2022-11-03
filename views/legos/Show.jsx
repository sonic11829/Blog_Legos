const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
    render () {
        const { name, set, comment } = this.props.lego
        const capSet = set[0].toUpperCase() + set.substring(1)
        return (
            <Default title={`${capSet}`} lego={this.props.lego}>
                <div className='post'>
                    <a className='name'> {name}: </a>
                    <p> {set} {comment} </p>
                </div>
            </Default>
        )
    }
}

module.exports = Show