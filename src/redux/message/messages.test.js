import { addMessage } from "./actions-messages";
import messageReduser from "./messages"

let initialState = [];

beforeEach(()=>{
    initialState = []
})

test('add new msg', () => {

    const newState = messageReduser(initialState, addMessage("test 1"))

    expect(newState[0].message).toBe("test 1")
});
