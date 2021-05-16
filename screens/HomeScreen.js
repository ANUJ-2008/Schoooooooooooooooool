import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import db from '../COnfig';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      allAttendance: [],
      students: {
        Hartej: '',
        Shyam: '',
        Shirish: '',
        Nishant: '',
        Deepak: '',
        Viraj: '',
        Arnav: '',
      },
    };
  }

  submitAttendance = () => {
    this.props.navigation.navigate('SummaryScreen');

    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var date = today.getDate();

    db.ref('/').update({
      [year]: {
        [month]: {
          [date]: {
            Hartej: { Attendance: this.state.students.Hartej, Roll_No: 1 },
            Shyam: { Attendance: this.state.students.Shyam, Roll_No: 2 },
            Shirish: { Attendance: this.state.students.Shirish, Roll_No: 3 },
            Nishant: { Attendance: this.state.students.Nishant, Roll_No: 4 },
            Deepak: { Attendance: this.state.students.Deepak, Roll_No: 5 },
            Viraj: { Attendance: this.state.students.Viraj, Roll_No: 6 },
            Arnav: { Attendance: this.state.students.Arnav, Roll_No: 7 },
          
          },
        },
      },
    });
  };

  render() {
    return (
      <View  style = {styles.app}>
      
        <AppHeader />
        <Text style={styles.text2}>1. Hartej</Text>
        <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ Hartej: 'Present' });
            this.state.students.Hartej = 'Present';
          }}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ Hartej: 'Absent' });
            this.state.students.Hartej = 'Absent';
          }}>
          <Text style={styles.text}>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.text2}>2. Shyam</Text>
        <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ Shyam: 'Present' });
            this.state.students.Shyam = 'Present';
          }}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ Shyam: 'Absent' });
            this.state.students.Shyam = 'Absent';
          }}>
          <Text style={styles.text}>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.text2}>3. Shirish</Text>
        <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ Shirish: 'Present' });
            this.state.students.Shirish = 'Present';
          }}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ Shirish: 'Absent' });
            this.state.students.Shirish = 'Absent';
          }}>
          <Text style={styles.text}>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.text2}>4. Nishant</Text>
        <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ Nishant: 'Present' });
            this.state.students.Nishant = 'Present';
          }}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ Nishant: 'Absent' });
            this.state.students.Nishant = 'Absent';
          }}>
          <Text style={styles.text}>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.text2}>5. Deepak</Text>
        <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ Deepak: 'Present' });
            this.state.students.Deepak = 'Present';
          }}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ Deepak: 'Absent' });
            this.state.students.Deepak = 'Absent';
          }}>
          <Text style={styles.text}>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.text2}>6. Viraj</Text>
        <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ Viraj: 'Present' });
            this.state.students.Viraj = 'Present';
          }}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ Viraj: 'Absent' });
            this.state.students.Viraj = 'Absent';
          }}>
          <Text style={styles.text}>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.text2}>7. Arnav</Text>
        <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ Arnav: 'Present' });
            this.state.students.Arnav = 'Present';
          }}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ Arnav: 'Absent' });
            this.state.students.Arnav = 'Absent';
          }}>
          <Text style={styles.text}>Absent</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.submit} onPress={this.submitAttendance}>
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  presentContainer: {
    borderWidth: 2,
    padding: 2,
    width: 80,
    borderRadius: 5,
    textAlign: 'center',
    marginLeft: 125,
    marginTop: -30,
    backgroundColor: 'green',
  },

  absentContainer: {
    borderWidth: 2,
    padding: 2,
    width: 80,
    borderRadius: 5,
    textAlign: 'center',
    marginLeft: 225,
    marginTop: -35,
    backgroundColor: 'red',
  },

  text: {
    fontSize: 20,
  },

  text2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    fontFamily: "comic sans MS",
    backgroundColor: "lightblue"
  },

  submit: {
    backgroundColor: 'yellow',
    alignSelf: 'center',
    marginTop: 20,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: 'blue',
    padding: 2,
  },

  app:{
    backgroundColor: "brown"
  }
});
