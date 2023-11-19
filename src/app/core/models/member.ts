/**
 * Represents a Playing Room member.
 */
export class Member {
  /**  id of the member */
  public id : string; 
  /**
   * The last name of the member.
   */
  public lastName: string;
  
  /**
   * The first name of the member.
   */
  public firstName: string;
  
  /**
   * The email address of the member.
   */
  public email: string;
  
  /**
   * The Konami ID of the member.
   */
  public konamiId: string;
  
  /**
   * The creation date of the member.
   */
  public creationDate: Date;

  /**
   * Initializes a new instance of the Member class.
   * @param id The id of the member.
   * @param lastName The last name of the member.
   * @param firstName The first name of the member.
   * @param email The email address of the member.
   * @param konamiId The Konami ID of the member.
   * @param creationDate The creation date of the member.
   */
  constructor(id: string, lastName: string, firstName: string, email: string, konamiId: string, creationDate: Date) {
    this.id = id;
    this.lastName = lastName;
    this.firstName = firstName;
    this.email = email;
    this.konamiId = konamiId;
    this.creationDate = creationDate;
  }

  
}

  
  


