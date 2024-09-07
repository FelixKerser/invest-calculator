import { formatter } from '../../util/investment';

export default function Table({ results }) {
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment value</th>
                    <th>Interest (Year)</th>
                    <th>Total interest</th>
                    <th>Invested capital</th>
                </tr>
            </thead>
            <tbody>
                {results && results.map((el) => (
                    <tr key={el.year}>
                        <td>{el.year}</td>
                        <td>{formatter.format(el.valueEndOfYear)}</td>
                        <td>{formatter.format(el.interest)}</td>
                        <td>{formatter.format(el.annualInvestment)}</td>
                        <td>{formatter.format(el.valueEndOfYear - el.annualInvestment)}</td>

                    </tr>
                ))}
            </tbody>
        </table>
    )
}