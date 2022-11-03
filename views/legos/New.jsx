const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
    render () {
        return (
            <Default title='Create A New Lego'>
                <form method='POST' action='/legos'>
                    Name: <input type='text' name="name" placeholder='Your name here' /><br />
                    Set: <input type='text' name='set' placeholder='Name of set here' /><br />
                    Comment: <input type='text' name='comment' placeholder='Comment here' /><br />
                    <input type='submit' value='Submit Lego' /> 
                </form>
            </Default>
        )
    }
}

module.exports = New