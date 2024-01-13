import InVoicePriceItems from "./InVoicePriceItems";

function InvoiceDetailsSection() {
  return (
    <section className="shadow-invoiceSh rounded-[0.8rem] bg-white p-20 pb-[4.8rem]">
      <div>
        <div>
          <h2 className="pb-3 text-[1.5rem] font-bold leading-[2.4rem] tracking-[-0.025rem] text-[#888eb0]">
            #<span className="text-[#0c0e16]">XM9141</span>
          </h2>
          <p className="text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]">
            Graphic Design
          </p>
        </div>

        <address className="flex flex-col items-end text-[1.3rem] font-medium not-italic leading-[1.8rem] tracking-[-0.01rem] text-[#7e88ce]">
          <span>19 Union Terrace</span>
          <span>London</span>
          <span>E1 3EZ</span>
          <span>United Kingdom</span>
        </address>
      </div>

      <div className="grid grid-cols-4 gap-12 pb-20 pt-8">
        <div>
          <div>
            <h3 className="text-[1.4rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]">
              Invoice Date
            </h3>
            <p className="pt-6 text-[1.5rem] font-bold leading-[2rem] tracking-[-0.025rem] text-[#0c0e16]">
              21 Aug 2021
            </p>
          </div>
          <div>
            <h3 className="text-[1.4rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]">
              Payment Due
            </h3>
            <p className="pt-6 text-[1.5rem] font-bold leading-[2rem] tracking-[-0.025rem] text-[#0c0e16]">
              20 Sep 2021
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]">
            Bill To
          </h3>
          <p className="pt-6 text-[1.5rem] font-bold leading-[2rem] tracking-[-0.025rem] text-[#0c0e16]">
            Alex Grim
          </p>
          <address className="flex flex-col items-start text-[1.3rem] font-medium not-italic leading-[1.8rem] tracking-[-0.01rem] text-[#7e88ce]">
            <span>84 Church Way</span>
            <span>Bradford</span>
            <span>BD1 9PB</span>
            <span>United Kingdom</span>
          </address>
        </div>

        <div className="col-start-3 col-end-5">
          <h3 className="text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]">
            Send to
          </h3>
          <p className="pt-6 text-[1.5rem] font-bold leading-[2rem] tracking-[-0.025rem] text-[#0c0e16]">
            alexgrim@mail.com
          </p>
        </div>
      </div>

      <div>
        <div className="rounded-[0.8rem_0.8rem_0_0] bg-[#f9fafe] p-[3.3rem] pb-0">
          <div className="grid grid-cols-[3fr_2.6rem_1fr_1fr] gap-28 pb-12">
            <h3 className="text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]">
              Item Name
            </h3>

            <h3 className="justify-self-center text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]">
              QTY.
            </h3>

            <h3 className="justify-self-end text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]">
              Price
            </h3>

            <h3 className="justify-self-end text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]">
              Total
            </h3>
          </div>
          <InVoicePriceItems
            name="Banner Design"
            qty="1"
            price="164.00"
            total="164.00"
          />
          <InVoicePriceItems
            name="Email Design"
            qty="2"
            price="200.00"
            total="400.00"
          />
        </div>

        <div className="flex items-center justify-between rounded-[0_0_0.8rem_0.8rem] bg-[#373b53] p-[3.3rem] pb-10">
          <p className="text-[1.3rem] font-medium leading-[1.8rem] tracking-[-0.01rem] text-white">
            Amount Due
          </p>
          <p className="text-[2.4rem] font-bold leading-[3.2rem] tracking-[-0.05rem] text-white">
            £ 564.00
          </p>
        </div>
      </div>
    </section>
  );
}

export default InvoiceDetailsSection;
