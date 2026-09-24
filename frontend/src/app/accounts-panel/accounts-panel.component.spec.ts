/*
 * Copyright (c) 2014-2026 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AccountsPanelComponent } from './accounts-panel.component'

describe('AccountsPanelComponent', () => {
  let component: AccountsPanelComponent
  let fixture: ComponentFixture<AccountsPanelComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountsPanelComponent, RouterTestingModule]
    }).compileComponents()

    fixture = TestBed.createComponent(AccountsPanelComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should total the mock account balances', () => {
    const expected = component.accounts.reduce((sum, account) => sum + account.balance, 0)
    expect(component.totalBalance).toBeCloseTo(expected, 2)
  })

  it('should render a row per account', () => {
    const rows = fixture.nativeElement.querySelectorAll('.account')
    expect(rows.length).toBe(component.accounts.length)
  })

  it('should link the primary action to the existing basket route', () => {
    const primary = fixture.nativeElement.querySelector('.action.primary')
    expect(primary.getAttribute('href')).toBe('/basket')
  })
})
