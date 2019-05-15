import React from 'react';

class Customer extends React.Component {
    render() {
        return (
            <div>
                <CusutomerProfile id={this.props.id } image={this.props.image} name={this.props.name}/>
                <CusutomerInfo birthday={this.props.birthday } gender={this.props.gender} job={this.props.job} />
            </div>
        )
    }
}

class CusutomerProfile extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt="profile" />
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CusutomerInfo extends React.Component {
    render() {
        return (
            <div>                
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>                
            </div>            
        )
    }
}

export default Customer;