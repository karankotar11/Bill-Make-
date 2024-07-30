'use client';

import { useState } from 'react';

export default function PrintData({ displaydata, setdisplaydata, billData, setdisplayform }) {
    const [hidebutton, sethidebutton] = useState('');
    const [displayname, setdisplayname] = useState('hidden');

    return (

        <div className={`${displaydata} `}>
            {/* <table className="w-" style={{ overflow: 'scroll' }} id="tbl1">
                <thead>
                    <tr>
                        <td colSpan="2">Name of Party</td>
                        <td className="text-center text-3xl w-1/2" style={{ borderBottom: 'none' }} rowSpan="2">{billData?.ownername}</td>
                        <td>CR. NO.</td>
                        <td>{billData?.crno}</td>
                        <td className="text-center w-auto">DATE</td>
                        <td>{billData?.date}</td>
                    </tr>
                    <tr>
                        <td colSpan="2">{billData?.partyname}</td>
                        <td>REF NO</td>
                        <td colSpan="3">{billData?.refno}</td>
                    </tr>
                    <tr>
                        <td colSpan="2" style={{ borderBottom: 'none' }}>PAN No.:{billData?.panno}</td>
                        <td className="font-semibold" style={{ textAlign: 'center', textDecoration: 'underline', borderTop: 'none', border: '0px' }}>Freight Statement</td>
                        <td style={{ borderBottom: 'none' }}>PERIOD</td>
                        <td style={{ borderBottom: 'none' }}>{billData?.periodfrom}</td>
                        <td className="text-center" style={{ borderBottom: 'none' }}>TO</td>
                        <td style={{ borderBottom: 'none' }}>{billData?.periodto}</td>
                    </tr>
                </thead>
            </table> */}

            <table className="w-full min-w-[100%]" style={{ overflow: 'scroll' }} id="tbl2">
                <thead>
                    <tr >
                        <td colSpan="3" className='border-x-2 border-black'>Name of Party</td>
                        <td colSpan="4" className="text-center text-3xl w-[45%] border-y-0" style={{ borderBottom: 'none' }} rowSpan="2">{billData?.ownername}</td>
                        <td className='border-x-2 border-black'>CR. NO.</td>
                        <td className='border-x-2 border-black'>{billData?.crno}</td>
                        <td className="text-center w-auto border-x-2 border-black">DATE</td>
                        <td>{billData?.date}</td>
                    </tr>
                    <tr>
                        <td colSpan="3" className='border-x-2 border-black'>{billData?.partyname}</td>
                        <td className='border-x-2 border-black'>REF NO</td>
                        <td colSpan="3" className='border-x-2 border-black'>{billData?.refno}</td>
                    </tr>
                    <tr className='no-top-border' >
                        <td colSpan="3" className='border-x-2 border-black'>PAN No.:{billData?.panno}</td>
                        <td colSpan="4" className="font-semibold border-x-2 border-black border-y-0 no-top-border" style={{ textAlign: 'center', textDecoration: 'underline',borderTop:'none' }}>Freight Statement</td>
                        <td style={{ borderBottom: 'none' }} className='border-x-2 border-black'>PERIOD</td>
                        <td style={{ borderBottom: 'none' }} className='border-x-2 border-black'>{billData?.periodfrom}</td>
                        <td className="text-center border-x-2 border-black" style={{ borderBottom: 'none' }}>TO</td>
                        <td style={{ borderBottom: 'none' }}>{billData?.periodto}</td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <th className='min-w-24'>Sr</th>
                        <th className='min-w-24'>L/R No.</th>
                        <th className='min-w-24'>Date</th>
                        <th className='min-w-24'>Destination</th>
                        <th className='min-w-24'>Qty</th>
                        <th className='min-w-24'>Rate</th>
                        <th className='min-w-24'>Amount</th>
                        <th className='min-w-24'>HSD(Ltr)</th>
                        <th className='min-w-24'>HSD</th>
                        <th className='min-w-24'>Advance</th>
                        <th className='min-w-24'>Net Amt.</th>
                    </tr>
                </thead>
                <tbody>
                    {billData?.numberplate && (
                        <tr>
                            <td colSpan="11">{billData?.numberplate}</td>
                        </tr>
                    )}
                    <tr style={{ textAlign: 'center', height: '30px' }}>
                        <td>{billData?.sr}</td>
                        <td>{billData?.lrno}</td>
                        <td>{billData?.datesr}</td>
                        <td>{billData?.destination}</td>
                        <td>{billData?.qty}</td>
                        <td>{billData?.rate}</td>
                        <td>{billData?.amount}</td>
                        <td>{billData?.hsdltr}</td>
                        <td>{billData?.hsd}</td>
                        <td>{billData?.advance}</td>
                        <td>{billData?.netamt}</td>
                    </tr>
                    {
                        (   billData?.sr2||
                            billData?.lrno2||
                            billData?.datesr2||
                            billData?.destination2||
                            billData?.qty2 ||
                            billData?.rate2 ||
                            billData?.amount2 ||
                            billData?.hsdltr2 ||
                            billData?.hsd2 ||
                            billData?.advance2 ||
                            billData?.netamt2) &&
                        <tr style={{ textAlign: 'center' }}>
                            <td>{billData?.sr2}</td>
                            <td>{billData?.lrno2}</td>
                            <td>{billData?.datesr2}</td>
                            <td>{billData?.destination2}</td>
                            <td>{billData?.qty2}</td>
                            <td>{billData?.rate2}</td>
                            <td>{billData?.amount2}</td>
                            <td>{billData?.hsdltr2}</td>
                            <td>{billData?.hsd2}</td>
                            <td>{billData?.advance2}</td>
                            <td>{billData?.netamt2}</td>
                        </tr>
                    }
                    {
                        (   billData?.sr3||
                            billData?.lrno3||
                            billData?.datesr3||
                            billData?.destination3||
                            billData?.qty3 ||
                            billData?.rate3 ||
                            billData?.amount3 ||
                            billData?.hsdltr3 ||
                            billData?.hsd3 ||
                            billData?.advanc3 ||
                            billData?.netamt3) &&
                        <tr style={{ textAlign: 'center' }}>
                            <td>{billData?.sr3}</td>
                            <td>{billData?.lrno3}</td>
                            <td>{billData?.datesr3}</td>
                            <td>{billData?.destination3}</td>
                            <td>{billData?.qty3}</td>
                            <td>{billData?.rate3}</td>
                            <td>{billData?.amount3}</td>
                            <td>{billData?.hsdltr3}</td>
                            <td>{billData?.hsd3}</td>
                            <td>{billData?.advance3}</td>
                            <td>{billData?.netamt3}</td>
                        </tr>
                    }


                    <tr className="h-80 text-center align-bottom">
                        <td colSpan="4" className="text-left font-bold">Grand Total..</td>
                        <td>{billData?.gqty}</td>
                        <td>{billData?.grate}</td>
                        <td>{billData?.gamount}</td>
                        <td>{billData?.ghsdltr}</td>
                        <td>{billData?.ghsd}</td>
                        <td>{billData?.gadvance}</td>
                        <td>{billData?.gnetamt}</td>
                    </tr>

                    <tr>
                        <td colSpan="11" className="font-bold">Amount Credited...{billData?.amountcreditedword}</td>
                    </tr>
                    <tr>
                        <td colSpan="11" className='p-0'>
                            <table className="w-full border-none p-0" id="tbl3">
                                <thead>
                                    <tr>
                                        <th className="border-2 border-black">Summary</th>
                                        <th className="border-2 border-black">Credit</th>
                                        <th className="border-2 border-black">Debit</th>
                                        <th className="text-left my-5">Net Payable..</th>
                                        <th colSpan="2" className="text-left">{billData?.netpayable}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border-2 border-black">Total Freight+Other</td>
                                        <td className="border-2 border-black text-right">{billData?.totalfrecr}</td>
                                        <td className="border-2 border-black text-right">{billData?.totalfredb}</td>
                                        <td colSpan="4" rowSpan="2" className="border-y-0 pl-5"> CN. No. &nbsp;<input type="text" className="ml-5" readOnly /></td>
                                    </tr>
                                    <tr>
                                        <td className="border-2 border-black">Detention</td>
                                        <td className="border-2 border-black text-right">{billData?.detentioncr}</td>
                                        <td className="border-2 border-black text-right">{billData?.detentiondb}</td>
                                    </tr>
                                    <tr>
                                        <td className="border-2 border-black">Shortage Amount</td>
                                        <td className="border-2 border-black text-right">{billData?.shortamtcr}</td>
                                        <td className="border-2 border-black text-right">{billData?.shortamtdb}</td>
                                        <td colSpan="4" rowSpan="2" className="border-y-0 pl-5"> PAID RS.<input type="text" className="ml-5" readOnly /></td>
                                    </tr>
                                    <tr>
                                        <td className="border-2 border-black">Advance + Diesel</td>
                                        <td className="border-2 border-black text-right">{billData?.advancedieselcr}</td>
                                        <td className="border-2 border-black text-right">{billData?.advancedieseldb}</td>
                                    </tr>
                                    <tr>
                                        <td className="border-2 border-black">Other Deductions</td>
                                        <td className="border-2 border-black text-right">{billData?.otherdeductcr}</td>
                                        <td className="border-2 border-black text-right">{billData?.otherdeductdb}</td>
                                        <td colSpan="4" rowSpan="2" className="border-y-0 pl-5"> PAID DT.<input type="text" className="ml-5" readOnly /></td>
                                    </tr>
                                    <tr>
                                        <th className="border-2 border-black text-left">Total...</th>
                                        <th className="border-2 border-black text-right">{billData?.totalcr}</th>
                                        <th className="border-2 border-black text-right">{billData?.totaldb}</th>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className={`${hidebutton}`}>
                <button className="bg-blue-600 text-white ml-2 px-5 py-2  rounded-lg mt-10 mx-2" onClick={() => {
                    setdisplayform('');
                    setdisplaydata('hidden');
                }}>Back</button>
                <button className="bg-blue-600 text-white  px-5 py-2  rounded-lg mt-10 mx-3" onClick={() => {
                    sethidebutton('hidden');
                    setdisplayname('');
                    setTimeout(() => {
                        window.print();
                        setTimeout(() => {
                            sethidebutton('');
                        }, 1000); // Adjust this timeout as needed
                    }, 10);
                }}>Print</button>
            </div>

            {/* <div className={`${displayname}`}>
                <h6>&copy; by Owner </h6>
            </div> */}
        </div>

    );
}
