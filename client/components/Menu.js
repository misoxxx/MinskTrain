import React from 'react'
import NotImplemented from './NotImplemented'
import LevelIcon from './LevelIcon'
import {Row, Col} from 'react-bootstrap'
import {divideArray} from '../functions/helpers'

const LevelRow = React.createClass({
    render() {
        const levels = this.props.levels
        return (
            
            <div className='levels-row'>
                <Col md={2}/>
                {
                    levels.map((object, i) => {
                        return <Col md={2} key={i}><LevelIcon key={i} level={levels[i]}/></Col>
                    })
                }
                <Col md={2}/>
            </div>
             
        )
    }
})

const Menu = React.createClass({
    componentDidMount() {
        this.props.getSolvedLevels()
    },
    render() {
        const levels = this.props.levels
        let levelsDivided = divideArray(levels.slice(0),4)
        return (
            <div className='levels-grid'>
                {
                    levelsDivided.map((object, i) => {
                        return <Row key={i}><LevelRow key={i} levels={levelsDivided[i]} /></Row>
                    })
                }
            </div>
        )
    }
})



export default Menu