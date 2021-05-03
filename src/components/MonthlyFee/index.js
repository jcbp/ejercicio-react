import { formatCurrency } from '../../common/helpers'

import './index.css'

const MonthlyFee = ({totalMoney, installments}) => {
  return (
    <div className="monthly-fee row v-center bg-secondary text-bold">
      <label>Cuota fija por mes</label>
      <div className="big-text">
        {formatCurrency(totalMoney / installments, ',', 2)}
      </div>
    </div>
  )
}

export default MonthlyFee
