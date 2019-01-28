import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import { Ionicons, Entypo }  from '@expo/vector-icons';

export default class Teste extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            conditions: [],
            immunizations: [],
            allergies: [],
            // Edit profile states
            medConditions: [
                {id: 1, name: 'Condition 1'},
            ],
            imunConditions: [
                {id: 1, name: 'Immunization 1'},
            ],
            allergieCondition: [
                {id: 1, name: 'Allergy 1'},
            ],
            imunDates: [],
            count: 1,
            countAllergy: 1,
            count3: 1,
            // Edit profile and languagues modal states
            modalIsVisible: false,
        }
    }

    componentWillMount() {


    }

    // Function to add more than one allergy
    countAllergyFunction(){
        var array2 = this.state.allergieCondition;
        var count2 = this.state.countAllergy;
        var countPlus2 = count2 + 1;
        var newId2 = countPlus2

        var object2 = {
            id: newId2,
            name: `Allergy ${countPlus2}`
        }

        array2.push(object2);

        this.setState({
            countAllergy:
            countPlus2, allergieCondition: array2
        });
    }

    render() {
        const {
            // Profile info
            data,
            conditions,
            immunizations,
            allergies,
            // Edit profile
            medConditions,
            imunConditions,
            allergieCondition,
            // Edit modal and languages modal
            modalIsVisible,
            translateIsVisible,
            languages
        } = this.state;
        return (
            <View style={styles.containerView}>
                <View>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20, marginTop: 15}}>
                    <Ionicons name="md-medkit" size={30} color="rgba(0,0,0,0.8)" style={{backgroundColor: 'transparent', marginRight: 10}} />
                    <Text style={{color: 'rgba(0,0,0,0.8)', fontSize: 17, fontWeight: 'bold', marginRight: 15}}>ALLERGIES</Text>
                    <TouchableOpacity
                        onPress={this.countAllergyFunction.bind(this)}>
                        <Entypo name="circle-with-plus" size={30} color="#ccc" style={{backgroundColor: 'transparent', marginRight: 10}} />
                    </TouchableOpacity>
                </View>


                {allergieCondition.map((item, index) => {
                    return(
                    <View key={item.id}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
                            <View style={{width: 8, height: 8, backgroundColor: '#007CE0', marginRight: 15}} />
                            <Text style={styles.infoText}>{item.name}</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View>
                            <Text style={styles.subLabel}>Allergy:</Text>
                            <TextInput
                                style={styles.textInput}
                                maxLength={4}
                                autoCorrect={false}
                                onChangeText={(allergie) => {this.setState({allergie: allergie})}}
                                value={data.allergie}
                                underlineColorAndroid={'transparent'}
                            />
                        </View>
                        <View>
                            <Text style={styles.subLabel}>Symptom:</Text>
                            <TextInput
                                style={}
                                autoCapitalize='words'
                                autoCorrect={false}
                                onChangeText={(typeSympton) => {this.setState({typeSympton: typeSympton})}}
                                value={data.typeSympton}
                                underlineColorAndroid={'transparent'}
                            />
                        </View>
                            </View>
                        </View>
                    );
                    })}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    containerView: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    infoText: {
        color: 'rgba(0,0,0,0.8)',
        fontSize: 15,
        fontWeight: 'normal'
    },
    subLabel: {
        color: '#999999',
        fontSize: 12,
        fontWeight: 'normal'
      },
      textInput: {
        width: 200,
        height: 45,
        borderColor: '#ccc',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 9,
        paddingLeft: 15,
        color: 'rgba(0,0,0,0.7)',
        fontWeight: 'normal',
        marginBottom: 15,
        fontSize: 15
      },
})