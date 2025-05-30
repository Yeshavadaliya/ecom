import React from 'react'

const ProductDescription = () => {
  return (
    <div className='mt-20'>
      <div className='flex gap-3 mb-4'>
        <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36'>Description</button>
        <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36'>Care Guide</button>
        <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36'>Size Guide</button>
      </div>
      <div className='flex flex-col pb-16'>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum facere similique obcaecati perferendis, veritatis a fugit eligendi. Sit, blanditiis hic culpa eos cupiditate accusamus asperiores quae incidunt expedita voluptatum officia. Minima consectetur et impedit. Quisquam dignissimos porro facilis perferendis fugiat a nulla saepe eaque, perspiciatis eos veniam consequatur, mollitia voluptatum sit in, ullam vitae. Cum.</p>
        <p className='text-sm'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque suscipit, rerum natus culpa, consectetur ab officiis dolor impedit illo ipsa voluptatum distinctio veniam in expedita itaque nihil quis?
        </p>
      </div>
    </div>
  )
}

export default ProductDescription