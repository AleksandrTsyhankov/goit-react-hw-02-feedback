import React, { Component } from 'react';
import s from './NotificationStyles.module.css';

class Notification extends Component {
    render() {
  return (
                <p className={s.notification}>No feedback given</p>
        )
    }
}

export default Notification;