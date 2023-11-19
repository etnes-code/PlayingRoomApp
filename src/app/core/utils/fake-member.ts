// Purpose: Generates fake members for testing purposes.
import { Member } from "../models/member";


function generateFakeMembers(numMembers: number): Member[] {
  const fakeMembers: Member[] = [];

  for (let i = 0; i < numMembers; i++) {
    const id = (i + 1).toString();
    const lastName = `Member ${id} last name`;
    const firstName = `Member ${id} first name`;
    const email = `member${id}@example.com`;
    const konamiId = `member${id}`;
    const createDate = new Date();

    const member = new Member(id, lastName, firstName, email, konamiId, createDate);
    fakeMembers.push(member);
  }

  return fakeMembers;
}

const numMembers = 10;
const fakeMembers = generateFakeMembers(numMembers);
console.log(fakeMembers);
