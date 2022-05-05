import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-password-strength-checker',
  templateUrl: './password-strength-checker.component.html',
  styleUrls: ['./password-strength-checker.component.scss']
})
export class PasswordStrengthCheckerComponent implements OnInit, OnChanges {

  @Input() public passwordToCheck!: string;
  @Output() passwordStrength = new EventEmitter<boolean>();

  public bar0!: string;
  public bar1!: string;
  public bar2!: string;
  public bar3!: string;
  public msg = '';
  private colors = ['darkred', 'orangered', 'orange', 'yellowgreen'];

  private static checkStrength(p: string) {
    let force = 0;
    const regex = /[$-/:-?{-~!"^_@`\[\]]/g;

    const lowerLetters = /[a-z]+/.test(p);
    const upperLetters = /[A-Z]+/.test(p);
    const numbers = /[0-9]+/.test(p);
    const symbols = regex.test(p);

    const flags = [lowerLetters, upperLetters, numbers, symbols];

    let passedMatches = 0;
    for (const flag of flags) {
      passedMatches += flag === true ? 1 : 0;
    }

    force += 2 * p.length + ((p.length >= 10) ? 1 : 0);
    force += passedMatches * 10;

    // short password
    force = (p.length <= 6) ? Math.min(force, 10) : force;

    // poor variety of characters
    force = (passedMatches === 1) ? Math.min(force, 10) : force;
    force = (passedMatches === 2) ? Math.min(force, 20) : force;
    force = (passedMatches === 3) ? Math.min(force, 30) : force;
    force = (passedMatches === 4) ? Math.min(force, 40) : force;

    return force;
  }

  private getColor(s: number) {
    let idx = 0;
    if (s <= 10) {
      idx = 0;
    } else if (s <= 20) {
      idx = 1;
    } else if (s <= 30) {
      idx = 2;
    } else if (s <= 40) {
      idx = 3;
    } else {
      idx = 4;
    }
    return {
      idx: idx + 1,
      col: this.colors[idx]
    };
  }

  private setBarColors(count: number, col: string) {
    for (let n = 0; n < count; n++) {
      let self = this as {[k: string]: any};
      self['bar' + n] = col;
    }
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }): void {
    const password = changes['passwordToCheck'].currentValue;
    this.setBarColors(4, '#DDD');
    let self = this;
    if (password) {
      const c = this.getColor(PasswordStrengthCheckerComponent.checkStrength(password));
      this.setBarColors(c.idx, c.col);

      const pwdStrength = PasswordStrengthCheckerComponent.checkStrength(password);
      pwdStrength === 40 ? this.passwordStrength.emit(true) : this.passwordStrength.emit(false);

      switch (c.idx) {
        case 1:
          this.msg = 'It\'s really poor, try more safe password';
          break;
        case 2:
          this.msg = 'I don\'t recommend this. write more complex.';
          break;
        case 3:
          this.msg = 'Not bad, but try more!';
          break;
        case 4:
          this.msg = 'Great! This will do. Just don\'t forget him';
          break;
      }
    } else {
      this.msg = '';
    }
  }
}
