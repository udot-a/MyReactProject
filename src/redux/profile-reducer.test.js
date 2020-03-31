import {addPostActionCreator, deletePost, profileReducer} from "./profile-reducer";
let state = {
    postData: [
        {
            id: 1,
            message: 'How are you?',
            likesCounter: 5,
            picture: 'https://klike.net/uploads/posts/2019-06/1560059165_1.jpg'
        },
        {
            id: 2,
            message: 'It is my life.',
            likesCounter: 12,
            picture: 'https://klike.net/uploads/posts/2019-06/medium/1560059237_3.jpg'
        },
        {
            id: 3,
            message: 'Very cool!!!',
            likesCounter: 23,
            picture: 'https://klike.net/uploads/posts/2019-06/1560059217_6.jpg'
        },
        {
            id: 4,
            message: 'In god we trust!!!',
            likesCounter: 35,
            picture: 'https://klike.net/uploads/posts/2019-06/1560059165_1.jpg'
        }]
}


it('length of posts should be incremented ', function () {
    //1. test date
    let action = addPostActionCreator("it-kamasutra")
    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.postData.length).toBe(5);
});

it('lmessage of new post should be correct ', function () {
    //1. test date
    let action = addPostActionCreator("it-kamasutra")
    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.postData[4].message).toBe("it-kamasutra");
});

it('after deleting length should be decrement ', function () {
    //1. test date
    let action = deletePost(1)
    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.postData.length).toBe(3);
});

it('after deleting length shouldn\'t  be decrement if id is incorrect', function () {
    //1. test date
    let action = deletePost(1000)
    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.postData.length).toBe(4);
});
