export class SaveContactDTO {
  constructor(payload) {
    this.first_name = payload.name;
    this.last_name = payload.lastName;
    this.full_name = `${payload.name} ${payload.lastName || ''}`.trim();
    this.email = payload.email;
    this.phone = payload.phone && payload.phone.split('-').join("") || '';
    this.active = true;
  }
}

// Material de estudio
export class UpdateContactDTO {
  constructor(newPayload, currentPayload) {
    Object.assign(this, currentPayload);

    if (newPayload.name && newPayload.lastName) {
      this.first_name = newPayload.name;
      this.last_name = newPayload.lastName;
      this.full_name = `${newPayload.name} ${newPayload.lastName}`;
    } else if (newPayload.name) {
      this.first_name = newPayload.name;
      this.full_name = `${newPayload.name} ${currentPayload.last_name || ''}`.trim();
    } else if (newPayload.lastName) {
      this.last_name = newPayload.lastName;
      this.full_name = `${currentPayload.first_name} ${newPayload.lastName}`;
    }

    newPayload.email && (this.email = newPayload.email);
    newPayload.phone && (this.phone = newPayload.phone.split('-').join(''));
    newPayload.active !== undefined && (this.active = newPayload.active);
  }
}
