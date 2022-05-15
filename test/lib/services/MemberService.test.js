const MemberService = require('../../../lib/services/MemberService')

describe('Unit test for Member Service', () => {
    test('Should return a bigger value of Member List Length', async () => {
        const allMembers = await MemberService.getAllMembers()
        expect(allMembers.length > 0).toBe(true)
    })
    test('Should return a name of the specific Member', async () => {
        const member = await MemberService.getMember(1)
        expect(member.name).toBe("DianaMagallanes")
    })
    test('Should insert a new member', async () => {
        const data = {
            name: "Test",
            username: "test",
            email: "test@test.com",
            password: "123123"
        }
        const newMember = await MemberService.newMember(data)
        expect(newMember.name).toBe("Test")
    })
})