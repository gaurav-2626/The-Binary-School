// react libraries
import React from "react";

// stylesheets
import "../stylesheets/component1.css";

// components
import { ReactComponent as SVG1 } from "../../../uploads/hero_svg.svg";

const Component1 = () => {
  return (
    <div className="container-fluid component-box">
      <div className="row justify-content-center">
        <div className="col component1">
          <div className="row">
            <div className="col-sm-6 component-partition">
              <div className="head-text">
                LEARN THE MAGIC OF <span>COMPUTERS</span>
              </div>
              <div className="body-text">
                Do you want to learn how this digital world around you works? If{" "}
                <span>yes</span>, then sit tight and come with us on this
                exciting journey.
              </div>
            </div>
            <div className="col-sm-6 svg1-box component-partition">
              <svg className="svg1" width="1129" height="716" viewBox="0 0 1129 716" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="hero-svg" clip-path="url(#clip0)">
                <g id="main-svg">
                <path id="Vector" d="M650.051 269.195C670.663 269.195 687.372 251.678 687.372 230.07C687.372 208.462 670.663 190.945 650.051 190.945C629.439 190.945 612.73 208.462 612.73 230.07C612.73 251.678 629.439 269.195 650.051 269.195Z" fill="#2F2E41"/>
                <path id="Vector_2" d="M660.449 192.022C666.908 192.023 673.256 193.78 678.873 197.123C684.49 200.467 689.183 205.28 692.494 211.094C695.805 216.908 697.62 223.523 697.762 230.293C697.903 237.062 696.367 243.754 693.303 249.715C696.539 245.471 698.896 240.567 700.224 235.315C701.551 230.064 701.821 224.58 701.015 219.213C700.21 213.846 698.346 208.714 695.544 204.143C692.742 199.573 689.062 195.665 684.739 192.668C680.417 189.671 675.546 187.65 670.437 186.736C665.329 185.821 660.094 186.033 655.068 187.356C650.041 188.679 645.333 191.086 641.243 194.422C637.153 197.759 633.77 201.952 631.311 206.734C634.8 202.143 639.232 198.435 644.277 195.888C649.321 193.34 654.849 192.019 660.449 192.022V192.022Z" fill="#2F2E41"/>
                <path id="Vector_3" d="M580.311 229.987C640.859 229.987 689.942 178.531 689.942 115.057C689.942 51.5829 640.859 0.126953 580.311 0.126953C519.763 0.126953 470.679 51.5829 470.679 115.057C470.679 178.531 519.763 229.987 580.311 229.987Z" fill="#2F2E41"/>
                <path id="Vector_4" d="M494.268 43.7493C513.159 21.4776 539.564 7.77124 567.912 5.52287C596.259 3.2745 624.332 12.66 646.203 31.6987C645.307 30.8053 644.42 29.9047 643.488 29.0365C621.756 8.79286 593.245 -1.57308 564.223 0.218455C535.202 2.00999 508.047 15.8123 488.732 38.5899C469.417 61.3674 459.522 91.255 461.224 121.68C462.927 152.104 476.086 180.574 497.809 200.828C498.741 201.696 499.698 202.514 500.649 203.343C480.052 182.802 467.872 154.675 466.682 124.899C465.491 95.122 475.382 66.0252 494.268 43.7493V43.7493Z" fill="#2F2E41"/>
                <path id="Vector_5" d="M579.382 229.013C618.379 229.013 649.992 195.872 649.992 154.99C649.992 114.108 618.379 80.9673 579.382 80.9673C540.385 80.9673 508.772 114.108 508.772 154.99C508.772 195.872 540.385 229.013 579.382 229.013Z" fill="#FFB8B8"/>
                <path id="Vector_6" d="M529.211 178.366C529.211 178.366 538.502 267.972 523.637 277.712C508.772 287.452 609.112 301.088 609.112 301.088C609.112 301.088 594.247 203.689 631.41 178.366H529.211Z" fill="#FFB8B8"/>
                <path id="Vector_7" d="M618.403 262.128C618.403 262.128 646.072 248.583 606.223 253.408C566.375 258.232 531.995 239.727 531.995 239.727C531.995 239.727 519.921 227.065 518.063 240.701C516.204 254.336 523.637 279.66 482.758 283.556C441.878 287.452 404.715 275.764 389.85 304.984C374.984 334.203 382.417 460.821 382.417 460.821C382.417 460.821 410.289 566.011 432.587 581.595C454.885 597.179 649.992 575.751 649.992 575.751L705.737 470.561V347.839C705.737 347.839 698.304 304.984 646.276 316.671C646.276 316.671 612.829 308.879 614.687 291.348C616.545 273.816 618.403 262.128 618.403 262.128Z" fill="#D0CDE1"/>
                <path id="Vector_8" d="M439.961 656.037C441.11 650.791 441.879 647.824 441.879 647.824L441.284 643.556L435.162 599.976L432.589 581.594C454.881 571.854 460.46 527.048 460.46 527.048L461.301 526.522L465.105 524.135V524.124L478.764 515.535L479.041 515.363L484.557 519.212L495.765 527.048C534.978 557.277 574.908 556.74 599.549 551.978C614.613 549.064 623.975 544.582 623.975 544.582L651.005 535.132L651.846 534.842L652.677 534.971L668.53 537.487L668.817 537.54L670.13 537.745L666.459 564.351L661.137 603.018C675.195 610.823 687.695 625.486 698.627 643.556C701.047 647.555 703.391 651.716 705.661 656.037C708.614 661.627 711.434 667.443 714.121 673.398C714.449 674.108 714.767 674.828 715.085 675.548C716.12 677.881 717.146 680.235 718.141 682.6H435.039C435.408 680.224 435.778 677.956 436.136 675.774C436.155 675.7 436.169 675.624 436.177 675.548C436.311 674.817 436.434 674.108 436.547 673.398C437.798 666.303 439.008 660.38 439.961 656.037Z" fill="#2F2E41"/>
                <path id="Vector_9" d="M428.871 281.608C428.871 281.608 449.311 320.568 441.878 369.267C434.445 417.966 464.176 538.74 464.176 538.74L486.474 532.896C486.474 532.896 471.609 431.602 475.325 408.226C479.041 384.851 479.041 293.296 460.46 281.608C441.878 269.92 428.871 281.608 428.871 281.608Z" fill="#2F2E41"/>
                <path id="Vector_10" d="M644.968 322.095L652.779 537.766L667.644 547.506C667.644 547.506 689.013 310.828 677.864 310.828H655.179C653.792 310.828 652.42 311.123 651.146 311.697C649.872 312.27 648.722 313.11 647.767 314.164C646.812 315.217 646.071 316.464 645.59 317.828C645.109 319.191 644.897 320.643 644.968 322.095V322.095Z" fill="#2F2E41"/>
                <path id="Vector_11" d="M474.396 533.87C479.527 533.87 483.686 529.51 483.686 524.13C483.686 518.751 479.527 514.391 474.396 514.391C469.265 514.391 465.105 518.751 465.105 524.13C465.105 529.51 469.265 533.87 474.396 533.87Z" fill="#FF5454"/>
                <path id="Vector_12" d="M660.212 543.61C665.343 543.61 669.503 539.249 669.503 533.87C669.503 528.491 665.343 524.13 660.212 524.13C655.081 524.13 650.921 528.491 650.921 533.87C650.921 539.249 655.081 543.61 660.212 543.61Z" fill="#FF5454"/>
                <path id="Vector_13" d="M518.991 62.4609V136.484H535.344L556.155 113.108L553.368 136.484H625.65L621.19 113.108L630.109 136.484H641.63V62.4609H518.991Z" fill="#2F2E41"/>
                <path id="Vector_14" d="M507.843 150.12C510.921 150.12 513.417 145.323 513.417 139.406C513.417 133.489 510.921 128.692 507.843 128.692C504.764 128.692 502.268 133.489 502.268 139.406C502.268 145.323 504.764 150.12 507.843 150.12Z" fill="#FFB8B8"/>
                <path id="Vector_15" d="M650.921 150.12C654 150.12 656.496 145.323 656.496 139.406C656.496 133.489 654 128.692 650.921 128.692C647.842 128.692 645.346 133.489 645.346 139.406C645.346 145.323 647.842 150.12 650.921 150.12Z" fill="#FFB8B8"/>
                <path id="Vector_16" d="M689.013 532.896C689.013 532.896 604.467 516.338 598.892 545.558C593.318 574.777 692.73 562.116 692.73 562.116L689.013 532.896Z" fill="#FFB8B8"/>
                <path id="Vector_17" d="M687.155 332.255C687.155 332.255 889.695 501.729 852.531 542.636C815.368 583.543 674.148 571.856 674.148 571.856L683.439 523.156L765.198 513.417L724.318 470.561L687.155 474.457V332.255Z" fill="#D0CDE1"/>
                <path id="Vector_18" d="M387.991 614.711L414.005 636.139C414.005 636.139 432.587 696.526 460.459 678.994C488.332 661.462 434.445 599.127 434.445 599.127L402.857 587.439L387.991 614.711Z" fill="#FFB8B8"/>
                <path id="Vector_19" d="M414.006 301.088L388.061 309.273C388.061 309.273 207.75 449.134 200.317 488.093C192.884 527.052 235.622 548.48 235.622 548.48L397.282 628.347L414.006 581.595L337.821 540.688C337.821 540.688 343.395 529 321.098 527.052C298.8 525.104 295.083 499.781 295.083 499.781C295.083 499.781 339.679 427.706 363.835 443.29C387.991 458.873 395.424 470.561 395.424 470.561L414.006 301.088Z" fill="#D0CDE1"/>
                <path id="Vector_20" d="M784.045 662.712V669.237C784.048 671.028 783.732 672.804 783.112 674.473C782.836 675.216 782.504 675.935 782.117 676.623C780.895 678.773 779.161 680.554 777.085 681.79C775.008 683.026 772.661 683.676 770.273 683.675H312.367C309.979 683.676 307.632 683.026 305.556 681.79C303.48 680.554 301.745 678.773 300.523 676.623C300.137 675.935 299.804 675.216 299.529 674.473C298.909 672.804 298.592 671.028 298.595 669.237V662.712C298.595 660.816 298.951 658.939 299.643 657.187C300.335 655.435 301.349 653.843 302.628 652.502C303.907 651.162 305.425 650.098 307.096 649.373C308.767 648.648 310.558 648.275 312.367 648.275H338.762V645.233C338.761 645.154 338.776 645.075 338.805 645.002C338.834 644.929 338.876 644.863 338.93 644.807C338.983 644.751 339.046 644.707 339.116 644.676C339.186 644.646 339.26 644.631 339.336 644.631H353.107C353.183 644.631 353.258 644.646 353.327 644.676C353.397 644.707 353.46 644.751 353.514 644.807C353.567 644.863 353.609 644.929 353.638 645.002C353.667 645.075 353.682 645.154 353.682 645.233V648.275H362.285V645.233C362.285 645.154 362.3 645.075 362.328 645.002C362.357 644.929 362.4 644.863 362.453 644.807C362.506 644.751 362.57 644.707 362.639 644.676C362.709 644.646 362.784 644.631 362.859 644.631H376.631C376.706 644.631 376.781 644.646 376.851 644.676C376.92 644.707 376.984 644.751 377.037 644.807C377.09 644.863 377.133 644.929 377.162 645.002C377.19 645.075 377.205 645.154 377.205 645.233V648.275H385.819V645.233C385.819 645.154 385.833 645.075 385.862 645.002C385.891 644.929 385.933 644.863 385.987 644.807C386.04 644.751 386.103 644.707 386.173 644.676C386.243 644.646 386.317 644.631 386.393 644.631H400.164C400.24 644.631 400.315 644.646 400.384 644.676C400.454 644.707 400.517 644.751 400.571 644.807C400.624 644.863 400.666 644.929 400.695 645.002C400.724 645.075 400.739 645.154 400.739 645.233V648.275H409.342V645.233C409.342 645.154 409.357 645.075 409.386 645.002C409.414 644.929 409.457 644.863 409.51 644.807C409.563 644.751 409.627 644.707 409.696 644.676C409.766 644.646 409.841 644.631 409.916 644.631H423.688C423.763 644.631 423.838 644.646 423.908 644.676C423.977 644.707 424.041 644.751 424.094 644.807C424.148 644.863 424.19 644.929 424.219 645.002C424.247 645.075 424.262 645.154 424.262 645.233V648.275H432.865V645.233C432.865 645.154 432.88 645.075 432.909 645.002C432.938 644.929 432.98 644.863 433.033 644.807C433.087 644.751 433.15 644.707 433.22 644.676C433.29 644.646 433.364 644.631 433.44 644.631H447.211C447.287 644.631 447.361 644.646 447.431 644.676C447.501 644.707 447.564 644.751 447.618 644.807C447.671 644.863 447.713 644.929 447.742 645.002C447.771 645.075 447.786 645.154 447.785 645.233V648.275H456.399V645.233C456.399 645.154 456.414 645.075 456.443 645.002C456.471 644.929 456.514 644.863 456.567 644.807C456.62 644.751 456.684 644.707 456.753 644.676C456.823 644.646 456.898 644.631 456.973 644.631H470.745C470.82 644.631 470.895 644.646 470.965 644.676C471.035 644.707 471.098 644.751 471.151 644.807C471.205 644.863 471.247 644.929 471.276 645.002C471.304 645.075 471.319 645.154 471.319 645.233V648.275H479.923V645.233C479.922 645.154 479.937 645.075 479.966 645.002C479.995 644.929 480.037 644.863 480.09 644.807C480.144 644.751 480.207 644.707 480.277 644.676C480.347 644.646 480.421 644.631 480.497 644.631H588.372C588.448 644.631 588.522 644.646 588.592 644.676C588.662 644.707 588.725 644.751 588.778 644.807C588.832 644.863 588.874 644.929 588.903 645.002C588.932 645.075 588.947 645.154 588.946 645.233V648.275H597.56V645.233C597.56 645.154 597.575 645.075 597.603 645.002C597.632 644.929 597.675 644.863 597.728 644.807C597.781 644.751 597.845 644.707 597.914 644.676C597.984 644.646 598.059 644.631 598.134 644.631H611.906C612.058 644.632 612.203 644.696 612.31 644.809C612.418 644.921 612.479 645.074 612.48 645.233V648.275H621.083V645.233C621.083 645.154 621.098 645.075 621.127 645.002C621.156 644.929 621.198 644.863 621.251 644.807C621.305 644.751 621.368 644.707 621.438 644.676C621.507 644.646 621.582 644.631 621.658 644.631H635.429C635.505 644.631 635.579 644.646 635.649 644.676C635.719 644.707 635.782 644.751 635.835 644.807C635.889 644.863 635.931 644.929 635.96 645.002C635.989 645.075 636.003 645.154 636.003 645.233V648.275H644.607V645.233C644.607 645.154 644.621 645.075 644.65 645.002C644.679 644.929 644.721 644.863 644.775 644.807C644.828 644.751 644.891 644.707 644.961 644.676C645.031 644.646 645.106 644.631 645.181 644.631H658.953C659.028 644.631 659.103 644.646 659.172 644.676C659.242 644.707 659.306 644.751 659.359 644.807C659.412 644.863 659.455 644.929 659.483 645.002C659.512 645.075 659.527 645.154 659.527 645.233V648.275H668.14V645.233C668.14 645.154 668.155 645.075 668.184 645.002C668.213 644.929 668.255 644.863 668.308 644.807C668.362 644.751 668.425 644.707 668.495 644.676C668.564 644.646 668.639 644.631 668.715 644.631H682.486C682.637 644.633 682.781 644.697 682.887 644.81C682.992 644.923 683.051 645.075 683.05 645.233V648.275H691.664V645.233C691.664 645.154 691.678 645.075 691.707 645.002C691.736 644.929 691.778 644.863 691.832 644.807C691.885 644.751 691.948 644.707 692.018 644.676C692.088 644.646 692.163 644.631 692.238 644.631H706.01C706.085 644.631 706.16 644.646 706.229 644.676C706.299 644.707 706.363 644.751 706.416 644.807C706.469 644.863 706.512 644.929 706.54 645.002C706.569 645.075 706.584 645.154 706.584 645.233V648.275H715.187V645.233C715.187 645.154 715.202 645.075 715.231 645.002C715.259 644.929 715.302 644.863 715.355 644.807C715.408 644.751 715.472 644.707 715.542 644.676C715.611 644.646 715.686 644.631 715.761 644.631H729.533C729.608 644.631 729.683 644.646 729.753 644.676C729.823 644.707 729.886 644.751 729.939 644.807C729.993 644.863 730.035 644.929 730.064 645.002C730.093 645.075 730.107 645.154 730.107 645.233V648.275H770.273C772.082 648.275 773.873 648.648 775.544 649.373C777.215 650.098 778.733 651.162 780.012 652.502C781.291 653.843 782.306 655.435 782.998 657.187C783.69 658.939 784.045 660.816 784.045 662.712V662.712Z" fill="#3F3D56"/>
                <path id="Vector_21" d="M917.195 674.468H165.554V676.618H917.195V674.468Z" fill="#3F3D56"/>
                <path id="Vector_22" d="M747.173 387.908H576.497V384.22H499.106V387.908H327.727C324.665 387.908 321.728 389.183 319.563 391.452C317.398 393.722 316.182 396.801 316.182 400.01V645.014C316.182 648.224 317.398 651.302 319.563 653.572C321.728 655.842 324.665 657.117 327.727 657.117H747.173C750.235 657.117 753.171 655.842 755.336 653.572C757.502 651.302 758.718 648.224 758.718 645.014V400.01C758.718 398.421 758.419 396.847 757.839 395.379C757.259 393.91 756.408 392.576 755.336 391.452C754.264 390.329 752.992 389.437 751.591 388.829C750.19 388.221 748.689 387.908 747.173 387.908V387.908Z" fill="#3F3D56"/>
                <path id="Vector_23" d="M537.786 500.319C551.944 500.319 563.421 488.287 563.421 473.444C563.421 458.602 551.944 446.569 537.786 446.569C523.627 446.569 512.15 458.602 512.15 473.444C512.15 488.287 523.627 500.319 537.786 500.319Z" stroke="#D0CDE1" stroke-width="2" stroke-miterlimit="10"/>
                <path id="Vector_24" d="M529.582 509.994C543.741 509.994 555.218 497.962 555.218 483.119C555.218 468.276 543.741 456.244 529.582 456.244C515.424 456.244 503.947 468.276 503.947 483.119C503.947 497.962 515.424 509.994 529.582 509.994Z" fill="#D0CDE1"/>
                </g>
                <g id="leaves-svg">
                <path id="Vector_25" d="M220.488 713.312H26.6819V715.743H220.488V713.312Z" fill="#3F3D56"/>
                <path id="Vector_26" d="M139.601 635.017C119.184 669.961 126.209 713.428 126.209 713.428C126.209 713.428 166.336 700.239 186.754 665.295C207.171 630.351 200.146 586.884 200.146 586.884C200.146 586.884 160.019 600.073 139.601 635.017Z" fill="#3F3D56"/>
                <path id="Vector_27" d="M125.375 713.716L124.214 713.523C123.795 713.454 82.0097 706.196 56.985 674.808C31.9601 643.418 32.5623 599.021 32.5705 598.576L32.5954 597.344L33.7563 597.537C34.1761 597.607 75.961 604.865 100.986 636.254C126.011 667.642 125.408 712.04 125.4 712.484L125.375 713.716Z" fill="#FF5454"/>
                <path id="Vector_28" d="M127.024 714.821L125.902 714.453C125.497 714.32 85.1715 700.74 64.7891 665.857C44.4066 630.972 51.1891 587.143 51.2592 586.704L51.4554 585.489L52.577 585.858C52.9826 585.991 93.3079 599.57 113.69 634.455C134.073 669.339 127.29 713.168 127.22 713.607L127.024 714.821ZM53.1098 588.318C52.1815 595.674 48.4813 633.829 66.5375 664.733C84.5948 695.636 118.698 709.516 125.37 711.992C126.298 704.636 129.998 666.481 111.942 635.578C93.8847 604.674 59.7811 590.795 53.1098 588.318H53.1098Z" fill="#3F3D56"/>
                <path id="Vector_29" d="M127.483 600.198C139.942 600.198 150.042 589.61 150.042 576.548C150.042 563.487 139.942 552.898 127.483 552.898C115.023 552.898 104.923 563.487 104.923 576.548C104.923 589.61 115.023 600.198 127.483 600.198Z" fill="#3F3D56"/>
                </g>
                <g id="top-right-svg">
                <path id="Vector_30" d="M713.917 273.321L843.332 136.579H904.431V134.429H842.476L842.176 134.748L712.458 271.81L713.917 273.321Z" fill="#3F3D56"/>
                <path id="Vector_31" d="M952.58 78.6255H922.888V109.752H952.58V78.6255Z" fill="#FF5454"/>
                <path id="Vector_32" d="M952.58 125.315H922.888V156.442H952.58V125.315Z" fill="#FF5454"/>
                <path id="Vector_33" d="M952.58 172.005H922.888V203.132H952.58V172.005Z" fill="#FF5454"/>
                <path id="Vector_34" d="M960.783 103.302H929.041V70.0254H960.783V103.302ZM931.092 101.152H958.732V72.1754H931.092V101.152Z" fill="#3F3D56"/>
                <path id="Vector_35" d="M960.783 149.992H929.041V116.716H960.783V149.992ZM931.092 147.842H958.732V118.866H931.092V147.842Z" fill="#3F3D56"/>
                <g id="right-bars-svg">
                <path id="right-bar3-svg" d="M1129 173.818H979.057V187.825H1129V173.818Z" fill="#D0CDE1"/>
                <path id="right-bar2-svg" d="M1129 127.128H979.057V141.135H1129V127.128Z" fill="#D0CDE1"/>
                <path id="right-bar1-svg" d="M1129 80.4385H979.057V94.4455H1129V80.4385Z" fill="#D0CDE1"/>
                </g>
                <path id="Vector_36" d="M960.783 196.682H929.041V163.405H960.783V196.682ZM931.092 194.532H958.732V165.555H931.092V194.532Z" fill="#3F3D56"/>
                </g>
                <g id="top-left-svg">
                <path id="Vector_37" d="M409.956 277.621L280.54 140.879H219.442V138.729H281.396L281.697 139.048L411.414 276.11L409.956 277.621Z" fill="#3F3D56"/>
                <g id="left-bars-svg">
                <g id="left-bar3-svg">
                <path id="left-full3" d="M149.713 168.733H6.10352e-05L6.10352e-05 199.776H149.713V168.733Z" fill="#D0CDE1"/>
                <path id="left-dark3" opacity="0.15" d="M99.8086 168.733H6.10352e-05L6.10352e-05 199.776H99.8086V168.733Z" fill="black"/>
                </g>
                <g id="left-bar2-svg">
                <path id="left-full2" d="M149.713 121.099H6.10352e-05L6.10352e-05 152.141H149.713V121.099Z" fill="#D0CDE1"/>
                <path id="left-dark2" opacity="0.15" d="M20.0508 121.099H0L0 152.141H20.0508V121.099Z" fill="black"/>
                </g>
                <g id="left-bar1-svg">
                <path id="left-full1" d="M149.713 73.4644H6.10352e-05L6.10352e-05 104.507H149.713V73.4644Z" fill="#D0CDE1"/>
                <path id="left-dark1" opacity="0.15" d="M61.9348 73.4644H6.10352e-05L6.10352e-05 104.507H61.9348V73.4644Z" fill="black"/>
                </g>
                </g>
                <path id="Vector_38" d="M193.807 106.479C202.868 106.479 210.213 98.7782 210.213 89.279C210.213 79.7798 202.868 72.0791 193.807 72.0791C184.745 72.0791 177.4 79.7798 177.4 89.279C177.4 98.7782 184.745 106.479 193.807 106.479Z" fill="#FF5454"/>
                <path id="Vector_39" d="M193.807 158.078C202.868 158.078 210.213 150.378 210.213 140.879C210.213 131.379 202.868 123.679 193.807 123.679C184.745 123.679 177.4 131.379 177.4 140.879C177.4 150.378 184.745 158.078 193.807 158.078Z" fill="#FF5454"/>
                <path id="Vector_40" d="M193.807 204.303C202.868 204.303 210.213 196.602 210.213 187.103C210.213 177.604 202.868 169.903 193.807 169.903C184.745 169.903 177.4 177.604 177.4 187.103C177.4 196.602 184.745 204.303 193.807 204.303Z" fill="#FF5454"/>
                <path id="Vector_41" d="M185.603 103.254C182.155 103.254 178.785 102.182 175.918 100.174C173.052 98.1659 170.817 95.3118 169.498 91.9725C168.178 88.6332 167.833 84.9587 168.506 81.4137C169.178 77.8688 170.839 74.6125 173.277 72.0567C175.715 69.5009 178.821 67.7604 182.202 67.0553C185.584 66.3501 189.089 66.712 192.274 68.0952C195.459 69.4784 198.182 71.8207 200.098 74.826C202.013 77.8313 203.035 81.3646 203.035 84.979C203.03 89.8241 201.192 94.4693 197.924 97.8953C194.656 101.321 190.225 103.248 185.603 103.254V103.254ZM185.603 68.8541C182.561 68.8541 179.587 69.7998 177.058 71.5716C174.528 73.3435 172.557 75.8618 171.392 78.8083C170.228 81.7547 169.924 84.9969 170.517 88.1248C171.111 91.2527 172.576 94.1259 174.727 96.381C176.878 98.6361 179.619 100.172 182.602 100.794C185.586 101.416 188.679 101.097 191.489 99.8765C194.3 98.656 196.702 96.5892 198.392 93.9375C200.082 91.2858 200.985 88.1682 200.985 84.979C200.98 80.7039 199.358 76.6053 196.474 73.5823C193.591 70.5594 189.681 68.8589 185.603 68.8541V68.8541Z" fill="#3F3D56"/>
                <path id="Vector_42" d="M185.603 154.853C182.155 154.853 178.785 153.782 175.918 151.774C173.052 149.766 170.817 146.911 169.498 143.572C168.178 140.233 167.833 136.558 168.506 133.013C169.178 129.468 170.839 126.212 173.277 123.656C175.715 121.101 178.821 119.36 182.202 118.655C185.584 117.95 189.089 118.312 192.274 119.695C195.459 121.078 198.182 123.42 200.098 126.426C202.013 129.431 203.035 132.964 203.035 136.579C203.03 141.424 201.192 146.069 197.924 149.495C194.656 152.921 190.225 154.848 185.603 154.853V154.853ZM185.603 120.454C182.561 120.454 179.587 121.399 177.058 123.171C174.528 124.943 172.557 127.461 171.392 130.408C170.228 133.354 169.924 136.596 170.517 139.724C171.111 142.852 172.576 145.726 174.727 147.981C176.878 150.236 179.619 151.771 182.602 152.394C185.586 153.016 188.679 152.697 191.489 151.476C194.3 150.256 196.702 148.189 198.392 145.537C200.082 142.885 200.985 139.768 200.985 136.579C200.98 132.304 199.358 128.205 196.474 125.182C193.591 122.159 189.681 120.459 185.603 120.454Z" fill="#3F3D56"/>
                <path id="Vector_43" d="M185.603 201.078C182.155 201.078 178.785 200.006 175.918 197.998C173.052 195.99 170.817 193.136 169.498 189.797C168.178 186.457 167.833 182.783 168.506 179.238C169.178 175.693 170.839 172.437 173.277 169.881C175.715 167.325 178.821 165.585 182.202 164.879C185.584 164.174 189.089 164.536 192.274 165.919C195.459 167.303 198.182 169.645 200.098 172.65C202.013 175.656 203.035 179.189 203.035 182.803C203.03 187.648 201.192 192.293 197.924 195.72C194.656 199.146 190.225 201.073 185.603 201.078V201.078ZM185.603 166.678C182.561 166.678 179.587 167.624 177.058 169.396C174.528 171.168 172.557 173.686 171.392 176.632C170.228 179.579 169.924 182.821 170.517 185.949C171.111 189.077 172.576 191.95 174.727 194.205C176.878 196.46 179.619 197.996 182.602 198.618C185.586 199.24 188.679 198.921 191.489 197.701C194.3 196.48 196.702 194.413 198.392 191.762C200.082 189.11 200.985 185.992 200.985 182.803C200.98 178.528 199.358 174.429 196.474 171.407C193.591 168.384 189.681 166.683 185.603 166.678V166.678Z" fill="#3F3D56"/>
                </g>
                <g id="mug-svg">
                <path id="Vector_44" d="M1066.47 713.312H872.663V715.744H1066.47V713.312Z" fill="#3F3D56"/>
                <path id="Vector_45" d="M1014.15 640.75H1012.1V624.626C1012.1 623.771 1012.43 622.951 1013 622.346C1013.58 621.742 1014.36 621.402 1015.18 621.401H1020.3C1020.58 621.4 1020.84 621.287 1021.03 621.086C1021.22 620.884 1021.33 620.611 1021.33 620.326V609.576C1021.33 609.291 1021.22 609.017 1021.03 608.816C1020.84 608.614 1020.58 608.501 1020.3 608.501H1015.18C1014.36 608.5 1013.58 608.16 1013 607.555C1012.43 606.95 1012.1 606.131 1012.1 605.276V599.901C1012.1 599.616 1011.99 599.342 1011.8 599.141C1011.61 598.939 1011.35 598.826 1011.08 598.826H1001.85C1001.03 598.825 1000.25 598.485 999.672 597.88C999.096 597.276 998.771 596.456 998.77 595.601V594.526C998.77 594.241 998.662 593.967 998.47 593.766C998.277 593.564 998.017 593.451 997.745 593.451H960.829C960.557 593.451 960.297 593.564 960.104 593.766C959.912 593.967 959.804 594.241 959.804 594.526V595.601C959.803 596.456 959.479 597.276 958.902 597.88C958.325 598.485 957.543 598.825 956.728 598.826H947.499C947.227 598.826 946.966 598.939 946.774 599.141C946.582 599.342 946.474 599.616 946.473 599.901V605.276C946.472 606.131 946.148 606.95 945.571 607.555C944.995 608.16 944.213 608.5 943.397 608.501H938.27C937.998 608.501 937.737 608.614 937.545 608.816C937.353 609.017 937.245 609.291 937.244 609.576V620.326C937.245 620.611 937.353 620.884 937.545 621.086C937.737 621.287 937.998 621.4 938.27 621.401H944.422C945.238 621.402 946.02 621.742 946.597 622.346C947.173 622.951 947.498 623.771 947.499 624.626V640.75H945.448V624.626C945.448 624.341 945.34 624.067 945.147 623.866C944.955 623.664 944.694 623.551 944.422 623.551H938.27C937.454 623.55 936.672 623.21 936.096 622.605C935.519 622 935.194 621.181 935.194 620.326V609.576C935.194 608.721 935.519 607.901 936.096 607.296C936.672 606.692 937.454 606.352 938.27 606.351H943.397C943.669 606.351 943.93 606.237 944.122 606.036C944.314 605.834 944.422 605.561 944.422 605.276V599.901C944.423 599.046 944.748 598.226 945.324 597.621C945.901 597.017 946.683 596.677 947.499 596.676H956.728C957 596.676 957.26 596.562 957.453 596.361C957.645 596.159 957.753 595.886 957.753 595.601V594.526C957.754 593.671 958.078 592.851 958.655 592.246C959.232 591.642 960.014 591.302 960.829 591.301H997.745C998.56 591.302 999.342 591.642 999.919 592.246C1000.5 592.851 1000.82 593.671 1000.82 594.526V595.601C1000.82 595.886 1000.93 596.159 1001.12 596.361C1001.31 596.562 1001.57 596.676 1001.85 596.676H1011.08C1011.89 596.677 1012.67 597.017 1013.25 597.621C1013.83 598.226 1014.15 599.046 1014.15 599.901V605.276C1014.15 605.561 1014.26 605.834 1014.45 606.036C1014.64 606.237 1014.91 606.351 1015.18 606.351H1020.3C1021.12 606.352 1021.9 606.692 1022.48 607.296C1023.06 607.901 1023.38 608.721 1023.38 609.576V620.326C1023.38 621.181 1023.06 622 1022.48 622.605C1021.9 623.21 1021.12 623.55 1020.3 623.551H1015.18C1014.91 623.551 1014.64 623.664 1014.45 623.866C1014.26 624.067 1014.15 624.341 1014.15 624.626V640.75Z" fill="#3F3D56"/>
                <path id="Vector_46" d="M1011.08 716H948.524C947.708 715.999 946.926 715.659 946.35 715.054C945.773 714.45 945.449 713.63 945.448 712.775V666.55H947.499V712.775C947.499 713.06 947.607 713.333 947.799 713.535C947.991 713.737 948.252 713.85 948.524 713.85H1011.08C1011.35 713.85 1011.61 713.737 1011.8 713.535C1011.99 713.333 1012.1 713.06 1012.1 712.775V666.55H1014.15V712.775C1014.15 713.63 1013.83 714.45 1013.25 715.054C1012.67 715.659 1011.89 715.999 1011.08 716V716Z" fill="#3F3D56"/>
                <path id="Vector_47" d="M1024.41 648.275H947.499C946.366 648.275 945.448 649.238 945.448 650.425V671.925C945.448 673.113 946.366 674.075 947.499 674.075H1024.41C1025.54 674.075 1026.46 673.113 1026.46 671.925V650.425C1026.46 649.238 1025.54 648.275 1024.41 648.275Z" fill="#FF5454"/>
                <path id="Vector_48" d="M1017.74 667.625H940.833C940.018 667.624 939.236 667.284 938.659 666.679C938.082 666.075 937.758 665.255 937.757 664.4V642.9C937.758 642.045 938.082 641.225 938.659 640.621C939.236 640.016 940.018 639.676 940.833 639.675H1017.74C1018.56 639.676 1019.34 640.016 1019.92 640.621C1020.49 641.225 1020.82 642.045 1020.82 642.9V664.4C1020.82 665.255 1020.49 666.075 1019.92 666.679C1019.34 667.284 1018.56 667.624 1017.74 667.625ZM940.833 641.825C940.561 641.825 940.301 641.939 940.108 642.14C939.916 642.342 939.808 642.615 939.808 642.9V664.4C939.808 664.685 939.916 664.958 940.108 665.16C940.301 665.362 940.561 665.475 940.833 665.475H1017.74C1018.01 665.475 1018.27 665.362 1018.47 665.16C1018.66 664.958 1018.77 664.685 1018.77 664.4V642.9C1018.77 642.615 1018.66 642.342 1018.47 642.14C1018.27 641.939 1018.01 641.825 1017.74 641.825H940.833Z" fill="#3F3D56"/>
                <path id="Vector_49" d="M977.236 583.776C974.51 564.525 973.79 545.021 975.088 525.607L977.236 493.477C965.401 518.164 968.076 550.658 977.236 583.776V583.776Z" fill="#D0CDE1"/>
                <path id="Vector_50" d="M986.465 589.151C985.153 577.664 984.807 566.077 985.431 554.527L986.465 535.401C980.771 550.097 982.058 569.438 986.465 589.151Z" fill="#D0CDE1"/>
                </g>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="1129" height="716" fill="white"/>
                </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component1;
