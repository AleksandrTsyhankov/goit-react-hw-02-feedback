import React, { Component } from 'react';
import s from './SectionStyles.module.css';

class Section extends Component {
    render() {
        const {title, children} = this.props

        return (
            <section className={s.section}>
                <h2>{title}</h2>
                {children}
            </section>
        )
    }
}

export default Section;