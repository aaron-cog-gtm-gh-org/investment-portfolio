/*
 * Copyright (c) 2014-2026 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { Component, ChangeDetectionStrategy } from '@angular/core'
import { DecimalPipe } from '@angular/common'
import { RouterLink } from '@angular/router'
import { MatIconModule } from '@angular/material/icon'

interface MockAccount {
  name: string
  number: string
  balance: number
  change: number
}

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'app-accounts-panel',
  templateUrl: './accounts-panel.component.html',
  styleUrls: ['./accounts-panel.component.scss'],
  imports: [DecimalPipe, RouterLink, MatIconModule]
})
export class AccountsPanelComponent {
  readonly accounts: MockAccount[] = [
    { name: 'RRSP', number: '••• 4021', balance: 214_760.33, change: 0.44 },
    { name: 'TFSA', number: '••• 7715', balance: 118_402.19, change: 0.51 },
    { name: 'Cash (CAD)', number: '••• 1180', balance: 96_318.4, change: -0.12 },
    { name: 'RESP', number: '••• 3306', balance: 57_831.66, change: 0.27 }
  ]

  get totalBalance (): number {
    return this.accounts.reduce((total, account) => total + account.balance, 0)
  }
}
