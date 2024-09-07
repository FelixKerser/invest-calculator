import Input from "./Input";

export default function InputGroup({ functions }) {
    return (
        <div id="user-input" className="input-group">
            <div>
                <Input Label="Initial Investment" onChange={functions.initialInvestmentFunc} />
            </div>
            <div>
                <Input Label="Annual Investment" onChange={functions.annualInvestmentFunc} />
            </div>
            <div>
                <Input Label="Expected Return" onChange={functions.expectedReturnFunc} /></div>
            <div>
                <Input Label="Duration" onChange={functions.durationFunc} />
            </div>
        </div>
    )
}