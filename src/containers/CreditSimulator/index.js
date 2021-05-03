import React, { useState } from 'react'
import NumberPicker from '../../components/NumberPicker'
import MonthlyFee from '../../components/MonthlyFee'
import Button from '../../components/Button'
import { formatCurrency } from '../../common/helpers'

const CreditSimulator = () => {
  const [totalMoney, setTotalMoney] = useState()
  const [installments, setInstallments] = useState()

  return (
    <div className="bg-gradient p-2">
      <div className="container bg-primary text-white p-5">
        <h1 className="text-center">
          Simulá tu crédito
        </h1>
        <form>
          <NumberPicker
            title="Monto total"
            min={5000}
            max={50000}
            formatter={formatCurrency}
            onChange={setTotalMoney}
          />
          <NumberPicker
            title="Plazo"
            min={3}
            max={24}
            onChange={setInstallments}
          />
          <MonthlyFee
            totalMoney={totalMoney}
            installments={installments}
          />
          <div className="row">
            <Button
              width="68%"
              fontSize="24px"
              color="#17aa8d"
            >
              Obtené crédito
            </Button>
            <Button
              width="30%"
              fontSize="15px"
              color="#0b548b"
            >
              Ver detalle de cuotas
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreditSimulator
