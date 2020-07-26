import React, { Component } from 'react';
import { Table, DataTable, TableHeader, Textfield} from 'react-mdl';
import Select from 'react-select';
import { ReactComponent as Star } from './star.svg';
import axios from 'axios';
import {Button, Dialog, DialogTitle, DialogContent, DialogActions} from 'react-mdl';
import ReactTable from "react-table";
import "react-table/react-table.css";



class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = { data : [], pages: -1, loading: false};
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  // get data right when the page mounts
  componentDidMount() {
    if (this.props.location.token == null) {
      this.props.history.push('/');
    }
    this.setState({loading: true});
    axios.post('https://ec2-3-34-99-135.ap-northeast-2.compute.amazonaws.com/favorites/?user=' + this.props.location.user_id).then((res) => {
      this.setState({ data:res.data});
    })
    this.setState({loading: false});
  }

  like (property) {
    axios.post('https://ec2-3-34-99-135.ap-northeast-2.compute.amazonaws.com/like/?user=' + this.props.location.user_id + '&property=' + property);
    this.setState({
      openDialog: true
    });
  }

  handleCloseDialog() {
    this.setState({
      openDialog: false
    });
  };

  render() {
    return (
      <div class="service">
        <h3 class="search-result-msg">My Favorites</h3>
        <div class="search-results">
          <ReactTable
          data={this.state.data}
          pages={this.state.pages}
          loading={this.state.loading}
          columns={[
            {
              columns: [
                {
                  Header: "",
                  accessor: "prop_id",
                  Cell: row => (
                    <div>
                      <Dialog open={this.state.openDialog}>
                        <DialogTitle>Success</DialogTitle>
                        <DialogContent>
                          <p>SUCCESS</p>
                        </DialogContent>
                        <DialogActions>
                          <Button type='button' onClick={this.handleCloseDialog}>OK</Button>
                        </DialogActions>
                      </Dialog>
                      <div style={{textAlign:"center"}}>
                        <button class="search-button like-button" onClick={() => {this.like(row.value)}}>UNLIKE</button>
                      </div>
                    </div>
                  )
                },
                {
                  Header: "Address",
                  accessor: "gu_dong",
                  Cell: row => (
                    <div style={{textAlign:"center"}}>
                      {row.value}
                    </div>
                  )
                },
                {
                  Header: "Name",
                  accessor: "name",
                  Cell: row => (
                    <div style={{textAlign:"center"}}>
                      {row.value}
                    </div>
                  )
                },
                {
                  Header: "Common Area",
                  accessor: "spc1",
                  Cell: row => (
                    <div style={{textAlign:"center"}}>
                      {row.value}
                    </div>
                  )
                },
                {
                  Header: "Exclusive Use Space",
                  accessor: "spc2",
                  Cell: row => (
                    <div style={{textAlign:"center"}}>
                      {row.value}
                    </div>
                  )
                },
                {
                  Header: "Level",
                  accessor: "flr",
                  Cell: row => (
                    <div style={{textAlign:"center"}}>
                      {row.value}
                    </div>
                  )
                },
                {
                  Header: "Story",
                  accessor: "flr_total",
                  Cell: row => (
                    <div style={{textAlign:"center"}}>
                      {row.value}
                    </div>
                  )
                },
                {
                  Header: "Price",
                  accessor: "price",
                  Cell: row => (
                    <div style={{textAlign:"center"}}>
                      {row.value}
                    </div>
                  )
                },
                {
                  Header: "Exp Price",
                  accessor: "exp_price",
                  Cell: row => (
                    <div style={{textAlign:"center"}}>
                      {row.value}
                    </div>
                  )
                },
                {
                  Header: "Learn More",
                  accessor: "url",
                  Cell: row => (
                    <div style={{textAlign:"center"}}>
                      <a href= {row.value}> Click </a>
                    </div>
                  )
                }
              ]
            },
          ]}
          defaultSorted={[
            {
              id: "Prop_id",
              desc: true
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        </div>
      </div>
    )
  }
}

export default Favorites;
