import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Home from "./components/Home";
import Scan from "./components/Scan";

export default class App extends React.Component {
    state = {
        page: 1,
    };

    pickPageToRender = () => {
        if (this.state.page === 1) {
            return (<Home pageChange={(pageNum) => this.setState({page: pageNum})} />);
        }
        if (this.state.page === 2) {
            return (<Scan pageChange={(pageNum) => this.setState({page: pageNum})} />);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.pickPageToRender()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffafcc',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });