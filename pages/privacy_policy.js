import React, { useEffect, useState } from "react";
import UnderConstruction from "./under_construction";
// import {Image, Popover, Steps, Button, Row, Col, Tooltip} from "antd";
// import Carousel from 'react-material-ui-carousel';
// import {useMediaQuery} from "react-responsive";
// import { useTranslation } from 'next-i18next';
// import ReactPlayer from 'react-player'
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import StickyHeader from "../components/StickyHeader";
import Footer from "../components/Footer";
import { Button, Image } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";

const PrivacyPolicy = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const tablet = useMediaQuery({ query: "(max-width: 767px)" });

  const genericHamburgerLine = `h-1 my-1 rounded-full ${tablet ? "bg-[#1D365F]" : "bg-[#FFFFFF]"} transition ease transform duration-300`;
  const genericHamburgerLine2 = `h-1 w-full my-1 rounded-full ${tablet ? "bg-[#1D365F]" : "bg-[#FFFFFF]"} transition ease transform duration-300`;
  const markdown = `
  # **Privacy Policy**

## **Overview**

1. TrustLink is a company incorporated in Indonesia and having its registered office at Centennial Tower Level 29 Unit F, Jl. Jend Gatot Subroto No 27, Karet Semanggi, Kec. Setiabudi, Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12930, that manage TrustLink. Privacy and the security of data are of paramount importance to TrustLink. Please read this document carefully.
2. In this Privacy Policy, TrustLink will sometimes be referred to as 'we', 'us', or 'our'. Additionally, there are references to "You". In these instances, "You" may be a visitor to our site, or a user of our Services (" **Provider**"), or a customer of a Provider (" **End User**").

## **Personal Data**

### **Collection of Your Personal Data**

1. To use our Services, you must create an account by entering your personal data to our site including but not limited to your e-mail and password to use our site. When you use our Services, we will have access to your personal data that you submit to us and personal data held by Account Servicing Payment Service Providers (i.e. any payment service provider, such as a bank or a credit card issuer that maintains an online payment account on your behalf) (" **Data Providers**") (" **Personal Data**") for the duration of the transmission.
2. Such Personal Data may include your date of birth, gender, account information, account balance, transactions, information on loans, insurance data and investments data. The manner in which we access, use, process and store your personal data for the provision of the Services is set out below.
3. All data and information that you provide in our Services and the changes are considered correct. We are not responsible for any consequences that may occur relating to the incorrect data and information that you provide in our Services.
4. According to applicable laws in Indonesia, the user who is entitled to make an agreement shall be 18 (eighteen) year old or more or has been married, and qualified before the law and does not under conservatorship. We are not responsible for the consequences occurred from the information that is not appropriate.
5. When you use our website (the " **Site**") we will collect browser information, including your IP address. We will also store some cookies (see our Cookies section below for more details).

### **Use of Your Personal Data**

1. Your Provider will direct you to use our Services which will include the following:
2. We will provide you with a software tool (" **Tool**") whi ch you can use to transmit information (including personal data) relating to payment accounts (" **Account Information**") that you hold with Data Providers to your Provider, and for Payment Initiation, which you can use to consent to and authorize a payment as specified by your Provider; this may require that your Provider sends us your bank account details
3. To use our Services you may need to provide the same identifying information that you use to login to your online bank account to access your relevant payment accounts with your bank (" **Credentials**").
4. The Tool may allow you to use your Credentials to retrieve such Account Information as you choose to transmit to the Provider. Schedule 1 to the Terms of Service lists the information that you can elect to retrieve and transfer using the Tool.
5. You should check your Provider's rules on data privacy. If your Account Information (including any Personal Data) is transmitted from a Provider to us, or through our software to a Provider, that Provider is responsible for it. We have no responsibility for services that provided by Provider to you.
6. Our Tool may merge or aggregate Account Information retrieved from your Provider, or a particular Data Provider with Account Information retrieved from other Data Providers where you or your Provider have instructed us to access and transmit such information.

### **Retention of Your Personal Data**

1. We will not retain your information for any longer than we think is necessary. Information that we collect will be retained for as long as needed
2. When determining the relevant retention periods, we consider factors including:
3. our contractual obligations and rights in relation to the information involved;
4. legal obligation(s) under applicable law to retain data for a certain period of time;
5. statute of limitations under applicable law(s);
6. our legitimate interests where we have carried out balancing tests (see section on 'How we use your personal information' above);
7. fraud and risk management;
8. (potential) disputes; and
9. guidelines issued by relevant data protection authorities.
10. Otherwise, we securely erase your information where we no longer require your information for the purposes collected.

### **Deletion of Personal Data**

We will not keep your Personal data for longer than necessary. We will delete your Personal Data:

1. as soon as it is no longer needed to provide the Services to you;
2. upon the deactivation of your account on our Site;
3. if You withdraw Your consent, and Your consent is necessary for us to retain the data.

### **Disclosure**

1. We may share your Personal Data with selected third parties, including business partners, suppliers and sub-contractors that assist us in the provision of our Service to you. The third-party providers used by us will only collect, use and disclose your information as instructed by us to provide Services to you.
2. We may also disclose your Personal Data to other third parties in the event that:
3. We reasonably consider that we are under a duty to disclose or share your Personal Data in order to comply with any legal obligation;
4. in order to enforce or apply our other agreements; or
5. to protect the rights, property, TrustLink's safety, our customers, or others.

### **Transfer of Your Personal Data Outside of Indonesia**

The data that we collect from you will not be transferred to, or stored of Indonesia. We will take reasonable steps to ensure that your Account Information (including any Personal Data) is handled securely and in accordance with this Privacy Policy.

### **The Legal Basis for Processing Personal Data**

These are our legal reasons for processing your personal data:

1. For the performance of a contract with You or Your Provider;
2. For the purpose of furthering TrustLink legitimate interests including providing better products, services, websites and applications, to operate our websites and applications.
3. With your consent to provide you with updates of TrustLink, products, events and service- related matters.

### **Consent**

1. When you use our Services, you may provide us with your Credentials and we require your consent to use those Credentials to:
2. retrieve your Account Information (including any Personal Data);
3. to provide such Account Information to the Providers which referred you to us;
4. improve the Services or the Tool;
5. temporarily access your payment account to debug any issues and to improve our automated processes for retrieving data.
6. You or your Provider may provide us with your Personal Data in order to initiate a payment.
7. The Personal Data we collect about You may be stored and processed to provide, maintain and improve our Services and Tool.
8. Your Personal Data may be anonymous, to be part of a market study or analytics by us or a third party. On our website, we use Google Analytics and other tools to process data in an anonymous form to provide us information about the use of our Site.
9. When you have signed up on TrustLink's website for marketing purposes you provide your personal information voluntarily and TrustLink could only send you updates with your consent.

## **Security**

We use industry-standard encryption methods to ensure the security of your Personal Data in accordance with applicable law and regulation but cannot guarantee the security of any data transmitted to a Provider using our Tool. Once we have received your information, we take reasonable precautions to ensure that it is not lost, misused, accessed, disclosed, altered or destroyed. If you have reason to believe that your Personal Data is no longer secure (for example if you feel that the security of your Personal Data has been compromised or there is an alleged misuse to your Personal Data then please contact us immediately).

## **Cookies**

1. When you browse the Site, we automatically receive your computer's internet protocol (IP) address. We collect data about how you interact with our website through the use of cookies. A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your computer, if you agree. Cookies contain information that is transferred to your computer's hard drive.
2. Our Site uses cookies to distinguish you from other users of our website. It helps us to remember your preferences. When you visit our Site, Cookies allow us to keep track of how many times you've visited us, how long you've visited us for and what you've done whilst you've been on our Site.
3. We use cookies to enhance your online experience of our Site and to better understand how our Site is used. Cookies help to ensure that what you see online is more relevant to you and your interests, based on information you've previously entered on our Site. The length of time the cookie is stored depends on that cookie, but this can vary from between a few minutes to up to two years.
4. Cookies never store any of your banking details. We use the following types of cookies:
5. 'Session cookies' which exist only while your browser is open. These cookies let us see where you've spent time on our Site and which part of the Site is the most or least effective. These are deleted automatically once you close your browser; and
6. 'Persistent cookies' which survive after your browser is closed. They can be used by the site to recognize your computer or mobile device when you open your browser and browse the Internet again.
7. 'Third Party cookies' these are cookies set by a domain other than our Site or a third party. These work by sharing your browser identification with that third party (like Facebook, Google), so that they can show you ads on their sites.
8. You can block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies. However, if you use your browser settings to block all cookies (including essential cookies for the provision of our Service) you may not be able to access all or parts of our site.

## **Disturbances**

You and/or Provider are responsible to take all necessary actions in order to prevent disturbances such as virus, malware, and other disturbances which affect the use of your system occurred. We will provide our best effort in order that you could use our Services without any disturbances.

## **Your Rights**

You have the right to ask us to provide any personal data we have collected about You, to You. Should You wish to do so, please e-mail us at info@withtrustlink.com to make a subject access request detailing:

1. your name,
2. your address,
3. the details of your Provider, and
4. the period of data you'd like access to.

## **Object to Direct Marketing**

You have the right to ask us at any time to stop processing your Personal Data for direct marketing at any time. We provide for the right for you to unsubscribe from any of our marketing material at any time.

### **Disclaimer**

- We are not responsible for any harm, damage, or lose that you suffer from hacking, tampering or any unauthorized access to your Personal Data or Credentials outside Service that we provide. We are only responsible for losses that you suffered which proven caused by us in relation with our Services. Thus, you are agree both at the time being and in the future shall exempt and release us from all claims, demands, or charge regarding any losses that you suffer.

- We are not authorized to provide financial, investment, marketing and advertising advice in our Service. If you require financial or investment advice you may contact an appropriate relevant consultant. We are not responsible for any consequences occurred due to the decision you made after using our Service.

## **Intellectual Property Rights**

We guarantee that we are the owner of intellectual property rights of Services that we provide. We also acknowledge that other intellectual property rights other than our Services that we use in our site belong to its relevant owner.

**End User Agreement**

In addition of privacy policy, this End User Agreement ("Agreement") is a legal agreement between Truslink. ("Truslink ", "we" or "us") and the end user of our Services ("you", "your"). This Agreement only applies when we provide API and used by end User, and/or when we transmit retrieved data to third parties on your behalf ("Services"). Such third parties include the owner or provider of the website, desktop and/or mobile application through which you have accessed our Services ("Application").

We strongly recommend you to read this agreement carefully and make sure you understand it. If you do not understand this Agreement, please contact us before using the Services by emailing us at info@withtrustlink.com or contact our executive sales.

1. **How Trustlink value end user data**  
We use your information in line with full respect and only by your consent, you can refer to our **term and condition** and if you are not comfortable with how we handle your information as explained you should not use our Service.
2. **Data retention**  
We retain end user data as long as necessary for the purpose(s) according agreement in contract between Us and third parties on your behalf service. For example, we will retain your transaction data as long as you consciously give Us an access. In some cases we retain personal data for longer when we have an ongoing legitimate need to do so, (for example to comply with our legal, tax or accounting obligations, resolve disputes or collect fees owed), or where it is otherwise permitted or required by applicable law, rule or regulation. When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal data and isolate it from any further processing until deletion is possible.

3. **Control and Responsibilities**  
You represent and warrant that you have all necessary rights to use your Accounts and Apps with the Platform, and you agree to comply with all laws and regulations applicable to your use, as well as any rules and guidelines that we post. You must not (1) use or access anyone else's Accounts or related data, (2) submit information about anyone else's identity or Accounts or that violates any third-party rights or (3) use the Platform for any fraudulent, illegal or misleading purpose. You also agree not to (a) modify, reverse engineer or seek to gain unauthorized access to the Platform or related systems, data or source code, (b) bypass or circumvent measures designed to prevent or limit access to any part of the Platform, (c) rent, lease, provide access to or sublicense any elements of the Platform to a third party or use the Platform on behalf of or to provide services to third parties, (d) copy, modify or create derivative works of the Platform or remove any of Trustlink's proprietary notices, (e) access the Platform for competitive purposes or publish any benchmark or performance information about the Platform, or (f) use the Platform in any manner that could damage, disable, overburden, or impair the functioning of the Platform or interfere with, disrupt or negatively affect other users.

4. **Dispute Resolution**  
**We hope you will have a positive experience using our Platform, but should a dispute between us raise out of or relating to these Terms, we agree to resolve the dispute by following these steps:**
1. **Send us a notice, according to the Notices section below, describing the dispute and including all relevant facts so we know how to help you.**
2. **Within 5 business days after our receipt of your notice, we will reach out to discuss your dispute with you.**
3. **If we're not able to resolve your dispute during our discussion, you will send us a written proposal for resolving your dispute.**
4. **Within 15 business days after our receipt of your written proposal, we will let you know whether we agree to your proposal, or we will provide you with a counter-proposal.**

## **Changes to this Privacy Policy**

1. Any changes we make to our Privacy Policy in the future will be posted on this page and, where appropriate, notified to you by e-mail. Please check back frequently to see any updates or changes to our privacy policy. By continuing to use our Service, you agree to all the changes that we make in the future from time to time and subject to the provisions under this Privacy Policy.
2. If any provision in this Privacy Policy is found to be invalid, void, or unenforceable, we, with our sole discretion, will change such provision to be adjusted to prevailing laws and regulations.

## **Miscellaneous**

1. If you would like to access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information about how we process your Personal Data, you can contact us at info@withtrustlink.com
2. By reading this Privacy
3. Policy, you acknowledge, agree, and provide your consent to comply with the Privacy Policy.

## **Final Terms**

**These Terms (together with any additional terms applicable to specific Services you use) make up the entire agreement between you and** Trustlink **, and supersede any prior agreements. These Terms do not create or confer any third-party beneficiary rights. If we do not enforce a provision in these Terms, it will not be considered a waiver. We reserve all rights not expressly granted to you. You may not transfer any of your rights or obligations under these Terms without our consent.**

## **Contact Us**

### **ADDRESS**

Office 88 Tower A level 36 Unit D

JL. Raya Casablanca No 16 RW 5 Menteng Dalam

Kecamatan Tebet

Daerah khusus ibukota Jakarta

12870

### **EMAIL**

info@withtrustlink.com
`;
  return (
    <div className={"w-full flew-row"}>
      <StickyHeader
        changeMenuOpen={setIsOpen}
        isMenuOpen={isOpen}
        onClickTopPage={() => {
          router.push("/");
        }}
        onClickProduct={() => {
          router.push("/");
        }}
        onClickContactUs={() => {
          router.push("/");
        }}
        onClickClients={() => {
          router.push("/");
        }}
        onClickUseCases={() => {
          router.push("/");
        }}
        onClickAboutUs={() => {
          router.push("/");
        }}
      />
      <div className="overflow-hidden">
        {/*<DrawerSlide menu={menu} isOpen={isOpen} />*/}
        <div className={`fixed w-16 sm:w-20 h-20 top-0 right-4 p-5 ${isOpen ? "z-[999999]" : "z-0"}`}>
          <button className="flex sticky top-0 right-0 w-[24px] h-[40px] flex-col justify-center group" style={{ visibility: isOpen ? "visible" : "hidden" }} onClick={() => setIsOpen(!isOpen)}>
            <div className={`${genericHamburgerLine} self-start ${isOpen ? "w-full rotate-45 translate-y-3 opacity-100" : "w-3 sm:w-4 opacity-100"}`} />
            <div className={`${genericHamburgerLine2} ${isOpen ? "opacity-0" : "opacity-100"}`} />
            <div className={`${genericHamburgerLine} self-end ${isOpen ? "w-full -rotate-45 -translate-y-3 opacity-100" : "w-3 sm:w-4 opacity-100"}`} />
          </button>
        </div>
      </div>
      <div className={"mt-16 ml-14"}>
        <Button
          className={"flex items-center justify-center text-white text-sm lg:text-base xl:text-lg border-[#FF6703] bg-[#FF6703] montserrat rounded-lg h-12 w-36 md:w-48 my-auto z-50"}
          icon={<ArrowLeftOutlined />}
          onClick={() => {
            router.push("/");
          }}
        >
          Back
        </Button>
      </div>
      <div className={"flex w-full"}>
        <div className={"w-2/3 z-20 text-justify mx-auto mb-20"}>
          <ReactMarkdown className={"terms-style"}>{markdown}</ReactMarkdown>
        </div>
        <div className={"absolute"}>
          <Image preview={false} src={"/assets/BGPrivacyPolicy.png"} alt={"Trustlink Background Opacity"} className={"h-auto w-full opacity-100 fixed bottom-0"} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
