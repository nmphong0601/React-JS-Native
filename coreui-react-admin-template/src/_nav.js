export default { //Setup menu ở đây
  items: [
    {
      name: 'Quản lý công việc',
      url: '/congviec',
      icon: 'icon-book-open',
      children: [
        {
          name: 'Công việc đã nhận',
          url: '/congviec/danhan'
        },
        {
          name: 'Tạo mới công việc',
          url: '/congviec/taomoi'
        },
        {
          name: 'Thông báo',
          url: '/congviec/thongbao'
        },
        {
          name: 'Phản hồi',
          url: '/congviec/phanhoi'
        },
        {
          name: 'Tin nhắn',
          url: '/congviec/tinnhan'
        }
      ]
      // badge: {
      //   variant: 'info',
      //   text: 'NEW',
      // }
    },
    {
      name: 'Quản lý văn bản',
      url: '/vanban',
      icon: 'icon-book-open',
      children: [
        {
          name: 'Văn bản đến',
          url: '/vanban/den'
        },
        {
          name: 'Văn bản đi',
          url: '/vanban/di'
        },
        {
          name: 'Văn bản nội bộ',
          url: '/vanban/noibo'
        },
        {
          name: 'Văn bản cá nhân',
          url: '/vanban/canhan'
        }
      ]
    },
    {
      name: 'Quản lý công tác',
      url: '/congtac',
      icon: 'icon-book-open',
    },
    {
      name: 'Lưu trữ - Tra cứu',
      url: '/luutrutracuu',
      icon: 'icon-book-open',
      children: [
        {
          name: 'Nộp lưu trữ',
          url: '/nopluutru'
        },
        {
          name: 'Hồ sơ vụ việc',
          url: '/hosovuviec'
        },
        {
          name: 'Tài liệu ISO',
          url: '/tailieuiso'
        },
        {
          name: 'Thông báo chung',
          url: '/thongbaochung'
        },
        {
          name: 'Trợ giúp',
          url: '/trogiup'
        },
        {
          name: 'Liên kết',
          url: '/lienket'
        }
      ]
    },
    {
      name: 'Thống kê- theo dõi',
      url: '/thongke',
      icon: 'icon-book-open',
      children: [
        {
          name: 'Thống kê xử lý',
          url: '/thongke/xuly'
        },
        {
          name: 'Thống kê văn bản',
          url: '/thongke/vanban'
        },
        {
          name: 'Thống kê công việc',
          url: '/thongke/congviec'
        },
        {
          name: 'Xem bảng log',
          url: '/thongke/log'
        }
      ]
    },
    {
      name: 'Quản lý danh mục',
      url: '/danhmuc',
      icon: 'icon-book-open',
      children: [
        {
          name: 'Các tổ chức',
          url: '/danhmuc/tochuc'
        },
        {
          name: 'Các cá nhân',
          url: '/danhmuc/canhan'
        },
        {
          name: 'Luồng xử lý',
          url: '/danhmuc/luongxuly'
        },
        {
          name: 'Loại văn bản đến',
          url: '/danhmuc/loaivanban/den'
        },
        {
          name: 'Loại văn bản đi',
          url: '/danhmuc/loaivanban/di'
        },
        {
          name: 'Vị trí lưu trữ',
          url: '/danhmuc/luutru'
        },
        {
          name: 'Số văn bản',
          url: '/danhmuc/sovanban'
        },
        {
          name: 'Lĩnh vực',
          url: '/danhmuc/linhvuc'
        },
        {
          name: 'Ký hiệu thông tin lưu trữ',
          url: '/danhmuc/kyhieuluutru'
        },
        {
          name: 'Loại tài liệu ISO',
          url: '/danhmuc/loaitailieuiso'
        },
        {
          name: 'Địa điểm',
          url: '/danhmuc/diadiem'
        },
        {
          name: 'Tổ chức',
          url: '/danhmuc/tochuc'
        },
        {
          name: 'Nhóm các tổ chức',
          url: '/danhmuc/nhomtochuc'
        }
      ]
    },
    {
      name: 'Quản lý người dùng',
      url: '/nguoidung',
      icon: 'icon-book-open',
      children: [
        {
          name: 'Đơn vị',
          url: '/nguoidung/donvi'
        },
        {
          name: 'Cán bộ',
          url: '/nguoidung/canbo'
        },
        {
          name: 'Nhóm làm việc',
          url: '/nguoidung/nhomlamviec'
        },
        {
          name: 'Chức vụ',
          url: '/nguoidung/chucvu'
        }
      ]
    },
    {
      name: 'Quản lý nhóm quyền',
      url: '/nhomquyen',
      icon: 'icon-book-open',
      children: [
        {
          name: 'Danh sách quyền',
          url: '/nhomquyen/danhsach'
        },
        {
          name: 'Cấu hình phân quyền',
          url: '/nhomquyen/cauhinhphanquyen'
        },
        {
          name: 'Function Category',
          url: '/nhomquyen/functioncategory'
        },
        {
          name: 'Function',
          url: '/nhomquyen/function'
        }
      ]
    }
  ]
};
