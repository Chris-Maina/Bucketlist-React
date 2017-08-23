import React, { Component } from 'react';
import './bucket.css';

class Activitylist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openCreate: false,
            newActivity: undefined,
            buckets: undefined
        };
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        this.sendRequest();
    }
    handleClick() {
        this.setState({ openCreate: true });
    }
    handleFormSubmit(activity_name){
        this.setState({ newActivity: activity_name });
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.openCreate !== true) {
            this.setState({ openCreate: true });
        }
    }
    sendRequest() {
        let access = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MDM0ODY3MTMsInN1YiI6MiwiZXhwIjoxNTAzNDg3MzEzfQ._DZq2XBKeyGOURJC31BAZOmtxQ3GBZHAZ_CX_AemZD8';
        fetch('http://127.0.0.1:5000/bucketlist/1/activities', {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                'Access-Control-Allow-Orgin': 'http://localhost:3000',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': access
            }
        })
            .then(function (response) {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                console.log(response.json());
                return response.json();
            }).then(function (data) {
                console.log(data);
            }).catch(function (error) {
                console.log(error);
            });
    }
    render() {
        let style1 = {
            'display': 'flex',
            'justify-content': 'center',
            'align-items': 'center',
            'margin-top': '40px',
            'padding': '100px 0'
        };
        return (
            <div className="row" style={style1}>
                <div className="col-md-6">
                    <div className="panel panel-success">
                        <ActivitylistHeading
                            title="Activities"
                            handlePlus={this.handleClick} />
                        <ActivitylistPanelBody
                            openCreate={this.state.openCreate}
                            onFormSubmit={this.handleFormSubmit} />
                        <ActivityTable />
                    </div>
                </div>
            </div>
        );
    }
}
class ActivitylistHeading extends Component {
    constructor(props) {
        super(props);
        this.handlePlusClick = this.handlePlusClick.bind(this);
    }
    handlePlusClick() {
        this.props.handlePlus();
    }
    render() {
        let style2 = {
            'cursor': 'pointer',
            'margin-left': '5px',
            'margin-right': '5px'
        };
        let style3 = {
            'margin-top': '-18px',
            'font-size': '15px'
        };
        return (
            <div className="panel-heading">
                <h3 className="panel-title">{this.props.title}</h3>
                <div className="pull-right" style={style3}>
                    <span className="glyphicon glyphicon-plus" style={style2} data-toggle="tooltip" title="Create Activity"
                    onClick={this.handlePlusClick}></span>
                    <span className="clickable filter" style={style2} data-toggle="tooltip" title="Activity Filter" data-container="body">
                        <i className="glyphicon glyphicon-filter"></i>
                    </span>
                </div>
            </div>
        );
    }
}
class ActivitylistPanelBody extends Component {
    constructor(props){
        super(props);
        this.handleCreateClick = this.handleCreateClick.bind(this);
    }
    handleCreateClick(evt){
        if(evt.target.activityname.value){
        this.props.onFormSubmit(evt.target.activityname.value);
        this.setState({openCreate:false});
    }
    console.log('Please provide an activity name');
    }
    render() {
     if (this.props.openCreate) {
            return (
                <div className="panel-body bucket-container">
                    <form onSubmit={this.handleCreateClick}>
                        <input type="text" name="activityname" placeholder="Activity name" />
                        <input type="submit" name="activitysubmit" className="btn btn-primary btn-sm bucket-submit" value="Create" />
                    </form>
                </div>
            );
        }else{
             return (
            <div className="panel-body">
                <input type="text" className="form-control" data-action="filter" data-filters="#bucket-table" placeholder="Search Bucket" />
            </div>
        );
        }
       
    }
}
class ActivityTable extends Component {
    render() {
        return (
            <table className="table table-hover" id="bucket-table">
                <thead>
                    <tr>
                        <th>Bucket name</th>
                        <th>Edit</th>
                        <th>Trash</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Adventure</td>
                        <td>
                            <button type="submit" className="btn btn-info btn-sm">
                                <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                            </button>
                        </td>
                        <td>
                            <button type="submit" className="btn btn-info btn-sm">
                                <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                            </button>
                        </td>
                    </tr>
                </tbody>

            </table>
        );
    }
}

export default Activitylist;