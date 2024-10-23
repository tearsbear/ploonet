"use client";

import Image from "next/image";
import { useState, FormEvent } from "react";

const Contact = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    content: "",
    reference: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ type: "", message: "" });

  const options = [
    "제품 광고",
    "기업/브랜드 홍보",
    "인터뷰",
    "기업 행사",
    "교육",
    "기타",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!selectedOption) newErrors.option = "영상 유형을 선택해주세요.";
    if (!formData.name.trim()) newErrors.name = "이름을 입력해주세요.";
    if (!formData.email.trim()) newErrors.email = "이메일을 입력해주세요.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "올바른 이메일 형식이 아닙니다.";
    if (!formData.phone.trim()) newErrors.phone = "전화번호를 입력해주세요.";
    if (!formData.content.trim())
      newErrors.content = "영상 내용을 입력해주세요.";
    if (!isChecked) newErrors.terms = "개인정보처리방침에 동의해주세요.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      content: "",
      reference: "",
    });
    setSelectedOption("");
    setIsChecked(false);
    setErrors({});
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the form data to your server
      console.log("Form submitted:", { ...formData, option: selectedOption });
      setModalContent({
        type: "success",
        message: "문의가 성공적으로 전송되었습니다.",
      });
      resetForm(); // Reset the form after successful submission
    } else {
      setModalContent({ type: "error", message: "입력 정보를 확인해주세요." });
    }
    setShowModal(true);
  };

  return (
    <div>
      <div className="text-center mb-12 mt-12 md:mt-36">
        <h2 className="text-2xl font-bold gradient-text-right mb-3 inline-block">
          영상 제작 문의
        </h2>
        <h3 className="text-2xl md:text-3xl font-sans mb-5 md:mb-12 text-white">
          <span className="font-bold">영상 제작이 필요하다면,</span>{" "}
          <br className="block md:hidden" /> 지금 문의 주세요.
        </h3>

        <h3 className="text-sm md:text-lg font-bold mb-5 text-white opacity-60">
          여러분이 필요한 영상을 빠르게 제작하기 위해{" "}
          <br className="block md:hidden" /> 플루닛 영상제작소가
          <br className="hidden md:block" /> 즉시 연락 드리겠습니다.
        </h3>

        <h4 className="font-bold text-[#666] md:hidden mt-3">E-MAIL</h4>
        <p className="font-sans text-[#666] text-sm">henry.lim@saltlux.com</p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto px-4">
        <div className="mb-6 relative">
          <div
            className="w-full bg-[#141414] border border-[#212121] text-white p-4 px-5 rounded-lg flex justify-between items-center cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className="select-none">
              {selectedOption || "영상 유형 선택"}
            </span>
            <Image
              src="/images/icons/chevron.svg"
              alt="Chevron"
              width={15}
              height={15}
              className={`select-none transition-transform duration-300 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </div>
          <div
            className={`absolute z-10 w-full mt-1 bg-[#141414] border border-[#FF6D51] rounded-lg overflow-y-auto transition-all duration-300 ease-in-out ${
              isDropdownOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
            }`}
            style={{ maxHeight: isDropdownOpen ? "240px" : "0" }}
          >
            <div className="p-0">
              {options.map((option, index) => (
                <div
                  key={index}
                  className="p-3 px-5 text-white hover:bg-[#FF6D51] cursor-pointer transition-colors duration-200"
                  onClick={() => {
                    setSelectedOption(option);
                    setIsDropdownOpen(false);
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        </div>
        {errors.option && (
          <p className="text-red-500 text-sm -mt-3 mb-5">{errors.option}</p>
        )}

        <div className="mb-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full bg-[#141414] text-white p-3 rounded-lg border border-[#212121] outline-none"
            placeholder="연락 받으실 담당자 성함"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-3 mb-5">{errors.name}</p>
          )}
        </div>

        <div className="mb-6">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full bg-[#141414] text-white p-3 rounded-lg border border-[#212121] outline-none"
            placeholder="이메일"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-3 mb-5">{errors.email}</p>
          )}
        </div>

        <div className="mb-6">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full bg-[#141414] text-white p-3 rounded-lg border border-[#212121] outline-none"
            placeholder="휴대폰 번호"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-3 mb-5">{errors.phone}</p>
          )}
        </div>

        <div className="mb-6">
          <textarea
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            className="w-full bg-[#141414] text-white p-3 rounded-lg border border-[#212121] outline-none"
            rows={5}
            placeholder="의뢰하실 영상내용"
          ></textarea>
          {errors.content && (
            <p className="text-red-500 text-sm mt-3 mb-5">{errors.content}</p>
          )}
        </div>

        <div className="mb-6">
          <input
            type="text"
            name="reference"
            value={formData.reference}
            onChange={handleInputChange}
            className="w-full bg-[#141414] text-white p-3 rounded-lg border border-[#212121] outline-none"
            placeholder="참고 영상"
          />
        </div>

        <p className="text-sm text-[#FF6D51] font-sans mt-10 md:mt-4">
          <span className="font-bold">*</span> 참고할만한 영상이나 원하시는
          영상과 유사한 영상의 링크 주소를 적어주시면 더 정확히
          안내해드리겠습니다.
        </p>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-14">
          <label className="flex items-center cursor-pointer mb-4 md:mb-0">
            <input
              type="checkbox"
              className="hidden"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <span className="w-5 h-5 flex items-center justify-center mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill={isChecked ? "#FF6D51" : "#666"}
                className="bi bi-check-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
            </span>
            <span className="text-[#666] text-sm select-none">
              <u>개인정보처리방침에</u> 동의합니다.
            </span>
          </label>
          <button
            type="submit"
            className={`w-full md:w-auto px-6 py-3 mt-5 md:mt-0 rounded-lg select-none ${
              isChecked
                ? "bg-[#FF6D51] text-white"
                : "bg-[#333] text-[#666] cursor-not-allowed"
            }`}
            disabled={!isChecked}
          >
            문의 보내기
          </button>
        </div>
      </form>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h2
              className={`text-xl font-bold mb-4 ${
                modalContent.type === "success"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {modalContent.type === "success" ? "성공" : "오류"}
            </h2>
            <p>{modalContent.message}</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 bg-[#FF6D51] text-white rounded hover:bg-[#E65A00]"
            >
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
