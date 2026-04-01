const Phone = ({ phone }) => {
    const {
        title,
        rating,
        reviews,
        price,
        originalPrice,
        discount,
        offers,
        details,
        image,
    } = phone;

    return (
        <div className="bg-gray-800 flex flex-col md:flex-row md:items-center md:justify-between m-4 rounded-md p-4 gap-6">

            {/* Left section */}
            <div className="flex flex-col sm:flex-row items-start gap-9 w-full">
                <img
                    className="h-58 sm:h-48 w-auto object-contain max-[500px]:m-auto rounded-md"
                    src={image}
                    alt={title}
                />

                <div className="flex flex-col justify-start gap-2 text-[12px] sm:text-[14px] md:text-[15px] flex-1">
                    <h1 className="text-[16px] sm:text-[18px] md:text-[19px] font-medium">
                        {title}
                    </h1>

                    <p className="font-medium">
                        ⭐ <span>{rating}</span> <span>{reviews}</span>
                    </p>

                    <ul className="list-disc pl-5 text-[12px] sm:text-[14px] md:text-[15px] mt-2">
                        {details.map((detail, index) => (
                            <li key={index}>{detail}</li>
                        ))}
                    </ul>

                    <p className="mt-4 text-green-600 text-[12px] sm:text-[14px]">
                        {offers.exchangeOffer}
                    </p>

                    <p className="text-green-400 text-[12px] sm:text-[14px]">
                        {offers.bankOffer}
                    </p>
                </div>
            </div>

            {/* Right section */}
            <div className="flex flex-col items-start md:items-end min-w-30">
                <h1 className="text-[22px] font-bold">{price}/-</h1>

                <div className="flex flex-col items-start md:items-end">
                    <p className="text-[15px] text-gray-500 line-through">
                        {originalPrice}/-
                    </p>
                    <p className="text-[16px] text-green-600">{discount} off</p>
                </div>
            </div>
        </div>
    );
};

export default Phone;