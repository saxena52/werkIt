import { Alert } from 'react-native';

export const mismatchPasswordAlert = () => {
    Alert.alert(
        '',
        'Passwords do not match',
        [
            {
                text: 'OK',
            }
        ]
    )
}

export const invalidCredentialsAlert = () => {
    Alert.alert(
        '',
        'Invalid login credentials',
        [
            {
                text: 'OK'
            }
        ]
    )
}

export const invalidEmailAlert = () => {
    Alert.alert(
        '',
        'Please enter a valid email address',
        [
            {
                text: 'OK'
            }
        ]
    )
}

export const invalidFormAlert = () => {
    Alert.alert(
        '',
        'Please make sure every field is filled out correctly',
        [
            {
                text: 'OK'
            }
        ]
    )
}

export const usernameAlreadyExists = () => {
    Alert.alert(
        '',
        'The selected username already exists',
        [
            {
                text: 'OK'
            }
        ]
    )
}

export const usernameDoesNotExist = () => {
    Alert.alert(
        '',
        'The specified username does not exist',
        [
            {
                text: 'OK'
            }
        ]
    )
}

export const invalidEmailCredentials = () => {
    Alert.alert(
        '',
        'Either the specified username or email is invalid.',
        [
            {
                text: 'OK'
            }
        ]
    )
}

export const invalidCode = () => {
    Alert.alert(
        '',
        'The 6-digit code entered is incorrect.',
        [
            {
                text: 'OK'
            }
        ]
    )
}

export const enterCodeError = () => {
    Alert.alert(
        '',
        'Please enter the 6-digit code.',
        [
            {
                text: 'OK'
            }
        ]
    )
}

export const missingUsernameError = () => {
    Alert.alert(
        '',
        'Please enter a username',
        [
            {
                text: 'OK'
            }
        ]
    )
}

export const workoutTypeError = () => {
    Alert.alert(
        '',
        'Please select a workout type',
        [
            {
                text: 'OK'
            }
        ]
    )
}

export const createExerciseError = () => {
    Alert.alert(
        '',
        'Please select at least one field',
        [
            {
                text: 'OK'
            }
        ]
    )
}

export const duplicateExerciseError = () => {
    Alert.alert(
        '',
        'The specified exercise already exists',
        [
            {
                text: 'OK'
            }
        ]
    )
}

export const duplicateWorkoutTypeError = () => {
    Alert.alert(
        '',
        'The specified workout type already exists',
        [
            {
                text: 'OK'
            }
        ]
    )
}

export const duplicateExerciseTypeError = () => {
    Alert.alert(
        '',
        'The specified exercise type already exists',
        [
            {
                text: 'OK'
            }
        ]
    )
}

export const missingNameError = () => {
    Alert.alert(
        '',
        'Please specify a name',
        [
            {
                text: 'OK'
            }
        ]
    )
}

export const missingExerciseError = () => {
    Alert.alert(
        '',
        'Please add at least one exercise',
        [
            {
                text: 'OK'
            }
        ]
    )
}

export const incompleteFormError = () => {
    Alert.alert(
        '',
        'Please fill out every field',
        [
            {
                text: 'OK'
            }
        ]
    )
}

export const incompleteWorkoutError = (navigate) => {
    Alert.alert(
        '',
        'You haven\'t finished every exercise yet!',
        [
            {
                text: 'Finish anyway',
                onPress: () => navigate(),
                style: 'destructive'
            },
            {
                text: 'OK'
            }
        ]
    )
}

export const friendExistsError = (friend_name) => {
    Alert.alert(
        '',
        'You are already friends with ' + friend_name + '!',
        [
            {
                text: 'OK'
            }
        ]
    )
}

export const friendDNEError = (friend_name) => {
    Alert.alert(
        '',
        'The username ' + friend_name + ' does not exist!  Friend not added.',
        [
            {
                text: 'OK'
            }
        ]
    )
}

export const workout_plan_sent = (friend_name) => {
    Alert.alert(
        '',
        'Successfully sent workout plan to ' + friend_name + ' !',
        [
            {
                text: 'OK'
            }
        ]
    )
}

export const pending_friend_alert = (friend_name) => {
    Alert.alert(
        '',
        'Waiting for ' + friend_name + ' to accept your friend request!',
        [
            {
                text: 'OK'
            }
        ]
    )
}

export const challenge_sent = (friend_name) => {
    Alert.alert(
        '',
        'Successfully sent fitness challenge to ' + friend_name + ' !',
        [
            {
                text: 'OK'
            }
        ]
    )
}