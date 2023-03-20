import React, { Component } from 'react';
import './custom.css';
import AuditLog from './views/auditLog';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
        <AuditLog />
    );
  }
}
