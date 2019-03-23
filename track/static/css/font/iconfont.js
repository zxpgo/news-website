;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-check" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M887.904 298.208c-12.864-12.064-33.152-11.488-45.216 1.408L415.936 753.984l-233.12-229.696C170.208 511.872 149.952 512 137.536 524.608c-12.416 12.576-12.256 32.864 0.352 45.248l256.48 252.672c0.096 0.096 0.224 0.128 0.32 0.224 0.096 0.096 0.128 0.224 0.224 0.32 2.016 1.92 4.448 3.008 6.784 4.288 1.152 0.672 2.144 1.664 3.36 2.144 3.776 1.472 7.776 2.24 11.744 2.24 4.192 0 8.384-0.832 12.288-2.496 1.312-0.544 2.336-1.664 3.552-2.368 2.4-1.408 4.896-2.592 6.944-4.672 0.096-0.096 0.128-0.256 0.224-0.352 0.064-0.096 0.192-0.128 0.288-0.224l449.184-478.208C901.44 330.592 900.768 310.336 887.904 298.208z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-comment" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512 928c-8.192 0-16.384-3.136-22.624-9.376l-96-96c-12.512-12.512-12.512-32.736 0-45.248s32.736-12.512 45.248 0L512 850.752l73.376-73.376C591.36 771.36 599.488 768 608 768l224 0c17.664 0 32-14.336 32-32L864 224c0-17.632-14.336-32-32-32L192 192C174.368 192 160 206.368 160 224l0 512c0 17.664 14.368 32 32 32l96 0c17.664 0 32 14.304 32 32s-14.336 32-32 32L192 832c-52.928 0-96-43.072-96-96L96 224c0-52.928 43.072-96 96-96l640 0c52.928 0 96 43.072 96 96l0 512c0 52.928-43.072 96-96 96l-210.752 0-86.624 86.624C528.384 924.864 520.192 928 512 928z"  ></path>'+
      ''+
      '<path d="M336 512C309.536 512 288 490.464 288 464S309.536 416 336 416s48 21.536 48 48S362.464 512 336 512z"  ></path>'+
      ''+
      '<path d="M528 512c-26.464 0-48-21.536-48-48s21.536-48 48-48 48 21.536 48 48S554.464 512 528 512z"  ></path>'+
      ''+
      '<path d="M720 512c-26.464 0-48-21.536-48-48s21.536-48 48-48 48 21.536 48 48S746.464 512 720 512z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-likefill" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M736 128c-65.952 0-128.576 25.024-176.384 70.464-4.576 4.32-28.672 28.736-47.328 47.68L464.96 199.04C417.12 153.216 354.272 128 288 128c-141.152 0-256 114.848-256 256 0 82.432 41.184 144.288 76.48 182.496l316.896 320.128C450.464 911.68 478.304 928 512 928c33.696 0 61.568-16.32 86.752-41.504l316.736-320 2.208-2.464C955.904 516.384 992 471.392 992 384 992 242.848 877.152 128 736 128z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-discover" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M544 288c0-52.928-43.072-96-96-96s-96 43.072-96 96 43.072 96 96 96S544 340.928 544 288zM416 288c0-17.632 14.368-32 32-32s32 14.368 32 32-14.368 32-32 32S416 305.632 416 288z"  ></path>'+
      ''+
      '<path d="M304 448C259.904 448 224 483.904 224 528 224 572.128 259.904 608 304 608s80-35.872 80-80C384 483.904 348.096 448 304 448zM304 544C295.168 544 288 536.832 288 528S295.168 512 304 512s16 7.168 16 16S312.832 544 304 544z"  ></path>'+
      ''+
      '<path d="M640 736m-64 0a2 2 0 1 0 128 0 2 2 0 1 0-128 0Z"  ></path>'+
      ''+
      '<path d="M887.84 268.672c39.744-60.672 64.256-113.184 64.224-148.96 0-22.976-9.312-36.928-17.12-44.576-38.08-37.376-110.016-3.2-160.768 25.664-15.328 8.736-20.704 28.288-11.968 43.648 8.736 15.36 28.32 20.704 43.648 11.968 49.408-28.16 73.248-33.088 82.496-33.696-1.504 41.376-95.328 202.432-330.208 433.504-226.368 222.72-398.656 324.672-442.24 325.376 0.96-11.36 8.768-44.448 58.528-118.688 1.312-1.888 2.4-3.968 3.232-6.144l2.304-5.92c0.256-0.64 0.288-1.344 0.512-2.016 8.8-10.24 10.816-25.088 3.392-37.248C147.328 651.616 128 582.592 128 512 128 300.256 300.256 128 512 128c59.296 0 116.096 13.12 168.864 39.04 15.936 7.776 35.04 1.184 42.816-14.656 7.776-15.84 1.248-35.008-14.624-42.816C647.424 79.328 581.12 64 512 64 264.96 64 64 264.96 64 512c0 76.064 19.488 150.496 56.064 216.64-0.192 0.576-0.64 1.056-0.8 1.632C51.168 832.608 35.2 895.68 68.928 928.768c11.008 10.784 25.632 15.584 43.072 15.584 39.328 0 92.864-24.928 150.08-60.896C336.096 933.408 421.952 960 512 960c247.04 0 448-200.96 448-448C960 424.864 934.912 341.248 887.84 268.672zM512 896c-68.288 0-133.728-17.888-191.84-51.552 128.288-92.256 258.432-218.56 282.848-242.624 89.152-87.712 178.56-187.04 244.64-275.968C879.2 382.592 896 446.112 896 512 896 723.744 723.744 896 512 896z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-lock" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512 768c-17.664 0-32-14.304-32-32l0-96c0-17.696 14.336-32 32-32s32 14.304 32 32l0 96C544 753.696 529.664 768 512 768z"  ></path>'+
      ''+
      '<path d="M832 960 192 960c-52.928 0-96-43.072-96-96L96 512c0-52.928 43.072-96 96-96l640 0c52.928 0 96 43.072 96 96l0 352C928 916.928 884.928 960 832 960zM192 480c-17.632 0-32 14.368-32 32l0 352c0 17.664 14.368 32 32 32l640 0c17.664 0 32-14.336 32-32L864 512c0-17.632-14.336-32-32-32L192 480z"  ></path>'+
      ''+
      '<path d="M736 480c-17.696 0-32-14.336-32-32L704 318.016C704 209.248 601.76 128 510.336 128 416.768 128 320 198.912 320 317.568L320 448c0 17.664-14.336 32-32 32s-32-14.336-32-32L256 317.568C256 158.848 385.312 64 510.336 64 632.224 64 768 168.32 768 318.016L768 448C768 465.664 753.696 480 736 480z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-weibo" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M728.864 497.056c-12.48-3.712-29.152-6.752-22.624-22.944 14.144-35.136 15.744-73.792 0.416-95.424-28.736-40.576-99.36-29.472-189.44 7.808 0-0.064-28.288 12.224-21.056-9.952 13.856-44.032 11.776-80.896-9.792-102.208-48.896-48.352-178.88 1.824-290.368 111.936C112.48 468.8 64 556.256 64 631.84c0 144.608 187.68 232.544 371.296 232.544 240.704 0 395.776-139.104 395.776-248.832C831.072 549.28 779.616 512.608 728.864 497.056zM435.808 812.576c-146.528 14.272-272.992-51.168-282.496-146.208-9.504-95.04 101.568-183.68 248.096-197.984 146.528-14.304 273.024 51.136 282.496 146.144C693.376 709.6 582.336 798.24 435.808 812.576z"  ></path>'+
      ''+
      '<path d="M897.632 235.136c-60.096-62.496-148.704-86.304-230.496-69.984l-0.032 0c-18.944 3.808-30.976 21.28-26.944 38.976 4.032 17.728 22.656 29.056 41.568 25.28 58.176-11.584 121.152 5.376 163.872 49.76 42.656 44.384 54.272 104.928 35.968 157.984l0 0c-5.952 17.28 4.128 35.776 22.592 41.376 18.368 5.568 38.144-3.872 44.096-21.12 0-0.032 0-0.096 0-0.096C973.92 382.656 957.728 297.568 897.632 235.136"  ></path>'+
      ''+
      '<path d="M807.904 317.088c-29.024-31.2-71.872-43.04-111.456-34.88-16.16 3.328-26.464 18.752-23.008 34.432 3.456 15.616 19.36 25.632 35.488 22.24l0 0.032c19.328-3.968 40.32 1.824 54.496 17.024 14.208 15.264 18.016 36.032 11.936 54.272l0.032 0c-5.056 15.232 3.52 31.584 19.264 36.512 15.744 4.864 32.608-3.424 37.696-18.688C844.768 390.752 836.992 348.288 807.904 317.088"  ></path>'+
      ''+
      '<path d="M484.928 504.064C413.12 485.76 331.968 520.8 300.8 582.72c-31.744 63.168-1.056 133.28 71.488 156.192 75.136 23.712 163.68-12.64 194.464-80.8C597.12 591.488 559.2 522.848 484.928 504.064zM430.08 662.528c-14.592 22.336-45.824 32.128-69.376 21.824-23.2-10.144-30.048-36.096-15.456-57.856 14.432-21.696 44.608-31.36 67.968-21.952C436.864 614.208 444.416 639.968 430.08 662.528zM478.176 603.328c-5.28 8.64-16.928 12.832-26.08 9.216-8.992-3.552-11.808-13.248-6.688-21.728 5.248-8.448 16.48-12.608 25.44-9.184C479.936 584.8 483.2 594.592 478.176 603.328z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-tengxunqq" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M511.747243 64.023152c-246.76415 0-447.189925 200.188368-447.189925 447.118294 0 246.835781 200.425775 446.857351 447.189925 446.857351 246.954485 0 447.118294-200.021569 447.118294-446.857351C958.86656 264.211521 758.701728 64.023152 511.747243 64.023152zM732.392526 632.729665c0 0-15.767102 43.236733-44.677549 82.07939 0 0 51.668777 17.659195 47.306422 63.545268 0 0 1.733481 51.186799-110.386086 47.661509 0 0-78.846766-6.169513-102.499465-39.717583l-10.329253 0-0.185218 0-10.329253 0c-23.653723 33.54807-102.499465 39.717583-102.499465 39.717583-112.14515 3.51915-110.386086-47.661509-110.386086-47.661509-4.387937-45.886073 47.306422-63.545268 47.306422-63.545268-28.910447-38.842657-44.677549-82.07939-44.677549-82.07939-70.096475 113.852024-63.079664-15.888875-63.079664-15.888875 13.143345-76.784804 68.336388-127.09156 68.336388-127.09156-7.886621-69.714781 21.024849-82.07939 21.024849-82.07939 6.057973-215.699644 190.525288-211.921597 194.399525-211.82029 3.874237-0.100284 188.30983-3.879354 194.394409 211.825406 0 0 28.910447 12.364609 21.024849 82.07939 0 0 55.193043 50.306756 68.336388 127.09156C795.471167 616.845906 802.461371 746.586806 732.392526 632.729665z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-my" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M160.032 928c-10.624 0-21.024-5.28-27.104-14.944C123.488 898.112 128 878.368 142.912 868.928c5.536-3.488 136.608-85.472 240.608-90.656L384 778.272l0-18.016c-120.352-49.92-199.648-175.616-199.648-320.448C184.352 250.208 330.272 96 509.664 96c179.392 0 325.376 154.208 325.376 343.808 0 144.704-75.808 267.136-195.04 318.464l0 20.352c104.8 9.408 234.88 86.624 240.448 89.952 15.168 9.088 20.096 28.704 11.04 43.872-9.088 15.2-28.768 20.096-43.872 11.072-1.28-0.736-126.24-74.88-214.24-81.312L608 842.24c-17.696 0-32-14.304-32-32l0-73.92c0-13.664 8.672-25.824 21.6-30.24 105.376-36.256 173.44-140.736 173.44-266.304C771.04 285.504 653.792 160 509.664 160c-144.096 0-261.312 125.504-261.312 279.808 0 125.696 71.328 233.312 177.536 267.744C439.072 711.808 448 724.096 448 737.984l0 72.288c0 17.696-14.336 32-32 32l-30.88 0c-85.824 4.32-206.848 80.064-208.032 80.8C171.776 926.4 165.856 928 160.032 928z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-weibiaoti2" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512 73.142857c-242.366171 0-438.857143 196.490971-438.857143 438.8864 0 242.336914 196.490971 438.857143 438.857143 438.857143s438.857143-196.520229 438.857143-438.857143C950.857143 269.604571 754.366171 73.142857 512 73.142857zM272.559543 646.085486l17.963886-65.301943 53.891657 24.517486L272.559543 646.085486zM430.518857 610.976914c-116.560457 0-211.090286-71.2704-211.090286-159.188114S313.929143 292.571429 430.518857 292.571429c109.099886 0 198.831543 62.405486 209.92 142.453029-5.705143-0.4096-11.498057-0.672914-17.349486-0.672914-100.205714 0-181.4528 61.966629-181.4528 138.386286 0 13.019429 2.516114 25.6 6.933943 37.536914C442.602057 610.655086 436.604343 610.976914 430.518857 610.976914zM691.668114 700.854857c14.5408-4.534857 28.0576-10.503314 40.433371-17.642057L745.325714 731.428571 691.668114 700.854857zM623.089371 704.394971c-96.109714 0-174.050743-58.923886-174.050743-131.657143 0-72.674743 77.941029-131.657143 174.050743-131.657143 96.138971 0 174.08 58.9824 174.08 131.657143C797.169371 645.500343 719.228343 704.394971 623.089371 704.394971zM502.432914 366.065371c17.378743 0 31.422171 12.814629 31.422171 28.584229 0 15.7696-14.043429 28.584229-31.422171 28.584229s-31.422171-12.814629-31.422171-28.584229C471.010743 378.850743 485.054171 366.065371 502.432914 366.065371zM358.663314 423.204571c-17.378743 0-31.422171-12.814629-31.422171-28.584229 0-15.798857 14.043429-28.584229 31.422171-28.584229s31.451429 12.814629 31.451429 28.584229C390.114743 410.4192 376.042057 423.204571 358.663314 423.204571zM589.736229 525.487543c0 13.077943-11.615086 23.639771-25.951086 23.639771s-25.921829-10.561829-25.921829-23.639771c0-13.019429 11.585829-23.639771 25.921829-23.639771S589.736229 512.468114 589.736229 525.487543zM708.286171 525.487543c0 13.077943-11.585829 23.639771-25.951086 23.639771-14.306743 0-25.921829-10.561829-25.921829-23.639771 0-13.019429 11.585829-23.639771 25.921829-23.639771C696.700343 501.877029 708.286171 512.468114 708.286171 525.487543z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-fensi" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M632.720967 636.144438c3.260254 0 6.733355 0.176009 10.44898 0.539282 22.598694 2.206248 48.730864 22.897499 51.919487 62.547545l0 13.196557c-2.964518 37.948287-31.617092 84.757382-115.345028 143.485949-83.729983-58.728566-112.37744-105.537661-115.339912-143.485949l0-13.196557c3.181459-39.650045 29.314653-60.341297 51.912323-62.547545 3.714602-0.363274 7.186679-0.539282 10.446933-0.539282 26.111704 0 38.639019 11.283997 52.979632 28.375258C594.085018 647.428436 606.607216 636.144438 632.720967 636.144438"  ></path>'+
      ''+
      '<path d="M859.334171 699.292664c-21.823028-56.30026-49.680493-105.568361-82.799798-146.434094-32.504298-40.107463-63.640436-64.22372-84.850503-77.722152 60.521398-37.573757 100.909248-104.632035 100.909248-180.956352 0-117.364011-95.481631-212.847689-212.845643-212.847689-79.090313 0-148.238183 43.364647-184.930873 107.563808-7.119141-0.826831-14.354939-1.26276-21.693068-1.26276-103.553471 0-187.7992 84.245729-187.7992 187.798177 0 66.404386 34.643008 124.865869 86.803995 158.26863-18.60166 12.137435-44.963051 33.050744-72.387657 66.88841-29.071106 35.871999-53.518914 79.104639-72.665996 128.500653-23.7581 61.291948-39.391149 132.348284-46.466288 211.197096l26.499537 2.378164c14.95255-166.653601 66.568115-265.220501 108.61065-319.40354 0.004093-0.00614 0.00614-0.010233 0.00614-0.010233s16.45067-23.964808 46.553269-48.935526c15.177678-12.809747 27.982308-20.86112 36.193317-25.41074 10.949376-6.388501 22.884197-12.231579 35.747155-17.037025-70.148663-17.450441-122.289184-80.963986-122.289184-156.435888 0-88.881306 72.310909-161.192216 161.193239-161.192216 3.107781 0 6.187933 0.11461 9.251711 0.291642-9.970072 24.616654-15.47546 51.500954-15.47546 79.649038 0 76.324316 40.390919 143.382595 100.911294 180.956352-17.801435 11.330046-42.595121 30.143531-69.321832 59.606563 0.041956-0.046049 0.083911-0.094144 0.125867-0.140193-0.233314 0.036839-0.467651 0.068562-0.699941 0.105401-7.016811 7.910157-14.97711 17.721617-23.098068 28.502148 0.011256 0 0.021489 0 0.032746 0-1.678222 2.199085-3.338025 4.427846-4.988618 6.67298-0.394996 0.539282-0.789992 1.080611-1.186012 1.623987-26.901697 36.926004-49.910737 79.786161-68.517513 127.788431-27.103288 69.922513-44.939515 151.003156-53.014424 240.992703l26.499537 2.378164c17.619286-196.367343 79.694063-310.363653 128.665405-371.418194 1.639337-2.043542 3.272533-4.02671 4.903683-5.983271l-0.007163-0.001023c0 0 2.086521-2.597151 5.931083-6.952342 16.105816-18.439978 31.572066-32.664957 45.072545-43.460838 19.816325-16.234753 43.967374-32.41527 69.803809-41.745776-77.604472-22.472827-134.508483-94.174869-134.508483-178.924065 0-102.693894 83.547835-186.241728 186.241728-186.241728s186.239681 83.547835 186.239681 186.241728c0 85.693708-58.180074 158.042479-137.112798 179.651636 10.534937 3.64297 22.148439 8.765641 34.731012 15.959483 0.099261-0.042979 0.199545-0.081864 0.298805-0.124843 15.676028 8.347109 49.396014 29.576619 86.215594 73.0262 0.059352 0.065492 0.116657 0.128937 0.176009 0.193405 1.38658 1.545192 2.618641 3.034103 3.721765 4.476965 0.61603 0.748037 1.230014 1.484817 1.847068 2.246157 49.510624 61.090357 112.249527 175.400822 129.98547 373.053438l26.499537-2.378164C904.275733 850.296843 886.437459 769.216199 859.334171 699.292664z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-fans" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M736 120c-109.12 0-183.936 50.944-224 125.888-40.064-74.88-112.064-125.888-224-125.888-55.936 0-220.736 57.472-224 280 0.576 279.36 423.488 504 448 504 24.448 0 445.824-222.912 448-504C959.744 175.616 790.656 120 736 120L736 120zM708.352 713.856c-46.336 38.656-97.024 73.856-144.832 102.08C547.712 825.28 516.864 841.088 512 845.888c0.896 0.96 1.216 1.536 0 1.536-1.28 0-0.96-0.64 0-1.536-4.864-4.8-35.904-20.8-51.776-30.144-48-28.352-98.88-63.68-145.344-102.464C192.576 610.88 120.128 501.952 119.936 400.256 120.128 288.384 176.128 176 288 176 455.488 176 512 344 512 344S569.6 176 736 176c111.68 0 168 112.96 168 223.488C904 502.528 830.592 611.712 708.352 713.856L708.352 713.856zM708.352 713.856M298.304 245.824C281.728 249.088 259.072 258.56 236.672 278.016 226.752 286.656 217.792 296.576 209.92 308.032c-4.096 6.144-7.872 12.544-11.136 19.2-16 31.872-20.992 63.68-20.48 88.384 0 0.704 0 0.704 0.064 1.088C178.88 432.128 192 444.16 207.36 443.584c15.488-0.576 27.52-13.696 26.944-29.12C233.984 398.08 237.632 374.656 248.832 352.384c2.24-4.48 4.736-8.768 7.488-12.864C261.376 332.096 267.136 325.76 273.408 320.256c14.08-12.16 27.84-17.984 35.648-19.456C324.16 297.792 334.08 283.136 331.2 268.032 328.128 252.8 313.472 242.88 298.304 245.824L298.304 245.824zM298.304 245.824"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-mail" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M858.656 192 165.344 192C109.472 192 64 237.44 64 293.312l0 469.376C64 818.56 109.472 864 165.344 864l693.312 0C914.528 864 960 818.56 960 762.688L960 293.312C960 237.44 914.528 192 858.656 192zM858.656 800 165.344 800C144.736 800 128 783.264 128 762.688L128 293.312C128 272.736 144.736 256 165.344 256l684.544 0-307.488 279.808c-14.592 14.56-38.272 14.528-54.752-1.792l-244.256-206.752C229.856 315.84 209.664 317.504 198.272 331.008c-11.424 13.472-9.76 33.664 3.744 45.088l242.304 204.96c19.904 19.904 46.048 29.792 72.032 29.792 25.632 0 51.136-9.632 70.176-28.736L896 300.544l0 462.144C896 783.264 879.264 800 858.656 800z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
