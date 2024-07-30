
import Btn from "@/components/btn-next";




export default  function GetFormData({ displayform, setdisplayform, setbillData, billData, setdisplaydata,location}) {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setbillData((billData) => ({
            ...billData,
            [name]: value,
        }));
    };

    return (
        <div className={`${displayform} `}>
            {/* <table className="w-full" id="tbl1">
                <tr>
                    <td colSpan="2" >Name of Party</td>
                    <td className="text-center w-2/5 border-y-0" rowSpan="2"><input type="text" name="ownername" id="ownername" value={billData.ownername} onChange={handleInputChange} className="w-30" placeholder="Name " /></td>
                    <td>CR. NO.</td>
                    <td><input type="text" className="w-20" name="crno" id="crno" value={billData.crno} onChange={handleInputChange} /></td>
                    <td className="text-center">DATE</td>
                    <td><input type="text" className="w-20" name="date" id="date" value={billData.date} onChange={handleInputChange} /></td>
                </tr>
                <tr>
                    <td colSpan="2"><input type="text" className="w-30" name="partyname" id="partyname" value={billData.partyname} onChange={handleInputChange} placeholder="Name of Party" /></td>

                    <td>REF NO</td>
                    <td colSpan="3"><input type="text" className="w-32" name="refno" id="refno" value={billData.refno} onChange={handleInputChange} /></td>
                </tr>
                <tr>
                    <td colSpan="2">PAN No.:<input type="text" className="w-24" name="panno" id="panno" value={billData.panno} onChange={handleInputChange} placeholder="PAN No." /></td>
                    <td style={{ textAlign: 'center', textDecoration: 'underline', borderTop: 'none', border: '0px' }}>Freight Statement</td>
                    <td>PERIOD</td>
                    <td><input type="text" className="w-20" name="periodfrom" id="periodfrom" value={billData.periodfrom} onChange={handleInputChange} /></td>
                    <td className="text-center">TO</td>
                    <td><input type="text" className="w-20" name="periodto" id="periodto" value={billData.periodto} onChange={handleInputChange} /></td>
                </tr>

            </table>*/}

            <table className="w-full border-black" id="tbl2">
                <tbody>
                <tr>
                    <td colSpan="3" className="border-r-2 border-black" >Name of Party</td>
                    <td colSpan="4" rowSpan="2" className="text-center w-2/5 border-y-0 border-r-2 border-black"><input type="text" name="ownername" id="ownername" value={billData.ownername} onChange={handleInputChange} className="w-30" placeholder="Name " /></td>
                    <td>CR. NO.</td>
                    <td><input type="text" className="w-20" name="crno" id="crno" value={billData.crno} onChange={handleInputChange} /></td>
                    <td className="text-center border-x-2 border-black">DATE</td>
                    <td><input type="text" className="w-20" name="date" id="date" value={billData.date} onChange={handleInputChange} /></td>
                </tr>
                <tr>
                    <td colSpan="3" className="border-r-2 border-black"><input type="text" className="w-30 " name="partyname" id="partyname" value={billData.partyname} onChange={handleInputChange} placeholder="Name of Party" /></td>

                    <td>REF NO</td>
                    <td colSpan="3"><input type="text" className="w-32" name="refno" id="refno" value={billData.refno} onChange={handleInputChange} /></td>
                </tr>
                <tr>
                    <td colSpan="3">PAN No.:<input type="text" className="w-24" name="panno" id="panno" value={billData.panno} onChange={handleInputChange} placeholder="PAN No." /></td>
                    <td colSpan="4" className="border-x-2 border-black" style={{ textAlign: 'center', textDecoration: 'underline', borderTop: 'none' }}>Freight Statement</td>
                    <td>PERIOD</td>
                    <td><input type="text" className="w-20" name="periodfrom" id="periodfrom" value={billData.periodfrom} onChange={handleInputChange} /></td>
                    <td className="text-center border-x-2 border-black">TO</td>
                    <td><input type="text" className="w-20" name="periodto" id="periodto" value={billData.periodto} onChange={handleInputChange} /></td>
                </tr>
                <tr>
                    <th>Sr</th>
                    <th>L/R No.</th>
                    <th>Date</th>
                    <th>Destination</th>
                    <th>Qty</th>
                    <th>Rate</th>
                    <th>Amount</th>
                    <th>HSD(Ltr)</th>
                    <th>HSD</th>
                    <th>Advance</th>
                    <th>Net Amt.</th>
                </tr>
                <tr>
                    <td colSpan="11"><input type="text" className="w-42" name="numberplate" id="numberplate" value={billData.numberplate} onChange={handleInputChange} placeholder="GJ00XX0000" /></td>
                </tr>
                <tr style={{ textAlign: 'center' }}>
                    <td><input type="text" className="w-20" name="sr" id="sr" value={billData.sr} onChange={handleInputChange} inputMode="decimal" /></td>
                    <td><input type="text" className="w-20" name="lrno" id="lrno" value={billData.lrno} onChange={handleInputChange} inputMode="decimal" /></td>
                    <td><input type="text" className="w-20" name="datesr" id="datesr" value={billData.datesr} onChange={handleInputChange} inputMode="date" /></td>
                    <td><input type="text" className="w-20" name="destination" id="destination" value={billData.destination} onChange={handleInputChange} inputMode="text" /></td>
                    <td><input type="text" className="w-20" name="qty" id="qty" value={billData.qty} onChange={handleInputChange} inputMode="decimal" /></td>
                    <td><input type="text" className="w-20" name="rate" id="rate" value={billData.rate} onChange={handleInputChange} inputMode="decimal" /></td>
                    <td><input type="text" className="w-20" name="amount" id="amount" value={billData.amount} onChange={handleInputChange} inputMode="decimal" /></td>
                    <td><input type="text" className="w-20" name="hsdltr" id="hsdltr" value={billData.hsdltr} onChange={handleInputChange} inputMode="decimal" /></td>
                    <td><input type="text" className="w-20" name="hsd" id="hsd" value={billData.hsd} onChange={handleInputChange} inputMode="decimal" /></td>
                    <td><input type="text" className="w-20" name="advance" id="advance" value={billData.advance} onChange={handleInputChange} inputMode="decimal" /></td>
                    <td><input type="text" className="w-20" name="netamt" id="netamt" value={billData.netamt} onChange={handleInputChange} inputMode="decimal" /></td>
                </tr>
                <tr style={{ textAlign: 'center' }}>
                    <td><input type="text" className="w-20" name="sr2" id="sr2" value={billData.sr2} onChange={handleInputChange} inputMode="decimal" /></td>
                    <td><input type="text" className="w-20" name="lrno2" id="lrno2" value={billData.lrno2} onChange={handleInputChange} inputMode="decimal" /></td>
                    <td><input type="text" className="w-20" name="datesr2" id="datesr2" value={billData.datesr2} onChange={handleInputChange} inputMode="date" /></td>
                    <td><input type="text" className="w-20" name="destination2" id="destination2" value={billData.destination2} onChange={handleInputChange} inputMode="text" /></td>
                    <td><input type="text" className="w-20" name="qty2" id="qty2" value={billData.qty2} onChange={handleInputChange} inputMode="decimal" /></td>
                    <td><input type="text" className="w-20" name="rate2" id="rate2" value={billData.rate2} onChange={handleInputChange} inputMode="decimal" /></td>
                    <td><input type="text" className="w-20" name="amount2" id="amount2" value={billData.amount2} onChange={handleInputChange} inputMode="decimal" /></td>
                    <td><input type="text" className="w-20" name="hsdltr2" id="hsdltr2" value={billData.hsdltr2} onChange={handleInputChange} inputMode="decimal" /></td>
                    <td><input type="text" className="w-20" name="hsd2" id="hsd2" value={billData.hsd2} onChange={handleInputChange} inputMode="decimal" /></td>
                    <td><input type="text" className="w-20" name="advance2" id="advance2" value={billData.advance2} onChange={handleInputChange} inputMode="decimal" /></td>
                    <td><input type="text" className="w-20" name="netamt2" id="netamt2" value={billData.netamt2} onChange={handleInputChange} inputMode="decimal" /></td>
                </tr>
                <tr style={{ textAlign: 'center' }}>
                    <td><input type="text" className="w-20" name="sr3" id="sr3" value={billData.sr3} onChange={handleInputChange} inputMode="decimal" /></td>
                    <td><input type="text" className="w-20" name="lrno3" id="lrno3" value={billData.lrno3} onChange={handleInputChange} inputMode="decimal" /></td>
                    <td><input type="text" className="w-20" name="datesr3" id="datesr3" value={billData.datesr3} onChange={handleInputChange} inputMode="date" /></td>
                    <td><input type="text" className="w-20" name="destination3" id="destination3" value={billData.destination3} onChange={handleInputChange} inputMode="text" /></td>
                    <td><input type="text" className="w-20" name="qty3" id="qty3" value={billData.qty3} onChange={handleInputChange} inputMode="decimal" /></td>
                    <td><input type="text" className="w-20" name="rate3" id="rate3" value={billData.rate3} onChange={handleInputChange} inputMode="decimal" /></td>
                    <td><input type="text" className="w-20" name="amount3" id="amount3" value={billData.amount3} onChange={handleInputChange} inputMode="decimal" /></td>
                    <td><input type="text" className="w-20" name="hsdltr3" id="hsdltr3" value={billData.hsdltr3} onChange={handleInputChange} inputMode="decimal" /></td>
                    <td><input type="text" className="w-20" name="hsd3" id="hsd3" value={billData.hsd3} onChange={handleInputChange} inputMode="decimal" /></td>
                    <td><input type="text" className="w-20" name="advance3" id="advance3" value={billData.advance3} onChange={handleInputChange} inputMode="decimal" /></td>
                    <td><input type="text" className="w-20" name="netamt3" id="netamt3" value={billData.netamt3} onChange={handleInputChange} inputMode="decimal" /></td>
                </tr>
                {/* <tr>
                    <td colSpan="11">
                        <button className="bg-blue-500 px-3 py-2 rounded-lg">Add More Column</button>
                    </td>
                </tr> */}
             

                <tr className="h-80 text-center align-bottom">
                    <td colSpan="4" className="text-left ">Grand Total..</td>
                    <td><input type="text" className="w-20" name="gqty" id="gqty" value={billData.gqty} onChange={handleInputChange} inputMode="decimal" /></td>
                    <td><input type="text" className="w-20" name="grate" id="grate" value={billData.grate} onChange={handleInputChange} inputMode="decimal" /></td>
                    <td><input type="text" className="w-20" name="gamount" id="gamount" value={billData.gamount} onChange={handleInputChange} inputMode="decimal" /></td>
                    <td><input type="text" className="w-20" name="ghsdltr" id="ghsdltr" value={billData.ghsdltr} onChange={handleInputChange} inputMode="decimal" /></td>
                    <td><input type="text" className="w-20" name="ghsd" id="ghsd" value={billData.ghsd} onChange={handleInputChange} inputMode="decimal" /></td>
                    <td><input type="text" className="w-20" name="gadvance" id="gadvance" value={billData.gadvance} onChange={handleInputChange} inputMode="decimal" /></td>
                    <td><input type="text" className="w-20" name="gnetamt" id="gnetamt" value={billData.gnetamt} onChange={handleInputChange} inputMode="decimal" /></td>
                </tr>
                <tr>
                    <td colSpan="11">Amount Credited...<input type="text" className="w-6/12" name="amountcreditedword" id="amountcreditedword" value={billData.amountcreditedword} onChange={handleInputChange} /></td>
                </tr>
                <tr>
                    <td colSpan="11" className="">

                        <table className="w-full border-none border-0" id="tbl3">
                            <tr>
                                <th className="border-2 border-black">Summary</th>
                                <th className="border-2 border-black">Credit</th>
                                <th className="border-2 border-black">Debit</th>
                                <th>Net Payable..</th>
                                <th colSpan="2"><input type="number" name="netpayable" id="netpayable" value={billData.netpayable} onChange={handleInputChange} /></th>

                            </tr>
                            <tr>
                                <td className="border-2 border-black">Total Freight+Other</td>
                                <td className="border-2 border-black"><input type="text" className="w-20" name="totalfrecr" id="totalfrecr" value={billData.totalfrecr} onChange={handleInputChange} /></td>
                                <td className="border-2 border-black"><input type="text" className="w-20" name="totalfredb" id="totalfredb" value={billData.totalfredb} onChange={handleInputChange} /></td>
                                <td colSpan="4" rowSpan="2" className="border-y-0 pl-5"> CN.  No. &nbsp;<input type="text" className="ml-5" readOnly /></td>
                            </tr>
                            <tr>
                                <td className="border-2 border-black">Detention</td>
                                <td className="border-2 border-black"><input type="text" className="w-20" name="detentioncr" id="detentioncr" value={billData.detentioncr} onChange={handleInputChange} /></td>
                                <td className="border-2 border-black"><input type="text" className="w-20" name="detentiondb" id="detentiondb" value={billData.detentiondb} onChange={handleInputChange} /></td>

                            </tr>
                            <tr>
                                <td className="border-2 border-black">Shortage Amount</td>
                                <td className="border-2 border-black"><input type="text" className="w-20" name="shortamtcr" id="shortamtcr" value={billData.shortamtcr} onChange={handleInputChange} /></td>
                                <td className="border-2 border-black"><input type="text" className="w-20" name="shortamtdb" id="shortamtdb" value={billData.shortamtdb} onChange={handleInputChange} /></td>
                                <td colSpan="4" rowSpan="2" className="border-y-0 pl-5"> PAID RS.<input type="text" className="ml-5" readOnly /></td>
                            </tr>
                            <tr>
                                <td className="border-2 border-black">Advance + Diesel</td>
                                <td className="border-2 border-black"><input type="text" className="w-20" name="advancedieselcr" id="advancedieselcr" value={billData.advancedieselcr} onChange={handleInputChange} /></td>
                                <td className="border-2 border-black"><input type="text" className="w-20" name="advancedieseldb" id="advancedieseldb" value={billData.advancedieseldb} onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <td className="border-2 border-black">Other Deductions</td>
                                <td className="border-2 border-black"><input type="text" className="w-20" name="otherdeductcr" id="otherdeductcr" value={billData.otherdeductcr} onChange={handleInputChange} /></td>
                                <td className="border-2 border-black"><input type="text" className="w-20" name="otherdeductdb" id="otherdeductdb" value={billData.otherdeductdb} onChange={handleInputChange} /></td>
                                <td colSpan="4" rowSpan="2" className="border-y-0 pl-5"> PAID DT.<input type="text" className="ml-5" readOnly /></td>
                            </tr>
                            <tr>
                                <th className="border-2 border-black">Total...</th>
                                <th className="border-2 border-black"><input type="text" className="w-20" name="totalcr" id="totalcr" value={billData.totalcr} onChange={handleInputChange} /></th>
                                <th className="border-2 border-black"><input type="text" className="w-20" name="totaldb" id="totaldb" value={billData.totaldb} onChange={handleInputChange} /></th>
                            </tr>

                        </table>

                    </td>

                </tr>
                </tbody>
            </table>
            <form action={ ()=> {
                    setdisplayform('hidden')
                    setdisplaydata('');
                
                }}>
                <button type="submit" className="bg-blue-600 text-white px-5 py-2 rounded-lg mt-5 mx-10" >Next</button>
            </form>
            {/* <Btn setdisplayform={setdisplayform} setdisplaydata={setdisplaydata} location={location}/> */}
            
        </div>
    )
}