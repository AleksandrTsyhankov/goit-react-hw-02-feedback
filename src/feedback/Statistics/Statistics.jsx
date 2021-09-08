import React, { Component } from 'react';
import s from './StatisticsStyles.module.css';

class Statistics extends Component {
    render() {
        const { good, neutral, bad, total, positiveFeedback } = this.props.stats;

        return (
                <ul className={s.statList}>
                    <li className={s.statListItem}>Good: {good}</li>
                    <li className={s.statListItem}>Neutral: {neutral}</li>
                    <li className={s.statListItem}>Bad: {bad}</li>
                    <li className={s.statListItem}>Total: {total}</li>
                    <li className={s.statListItem}>Positive feedback: {positiveFeedback}%</li>
                </ul>
        );
    }
}

export default Statistics;