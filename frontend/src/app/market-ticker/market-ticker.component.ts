/*
 * Copyright (c) 2014-2026 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { Component, ChangeDetectionStrategy } from '@angular/core'
import { DecimalPipe } from '@angular/common'

interface TickerQuote {
  symbol: string
  last: number
  change: number
}

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'app-market-ticker',
  templateUrl: './market-ticker.component.html',
  styleUrls: ['./market-ticker.component.scss'],
  imports: [DecimalPipe]
})
export class MarketTickerComponent {
  readonly quotes: TickerQuote[] = [
    { symbol: 'S&P/TSX', last: 24812.4, change: 0.62 },
    { symbol: 'S&P 500', last: 5781.16, change: 0.41 },
    { symbol: 'NASDAQ', last: 18294.72, change: -0.18 },
    { symbol: 'CAD/USD', last: 0.7314, change: -0.09 },
    { symbol: 'WTI CRUDE', last: 78.44, change: 1.27 },
    { symbol: 'GOLD', last: 2648.9, change: 0.33 },
    { symbol: 'GoC 10Y', last: 3.214, change: -0.04 }
  ]
}
