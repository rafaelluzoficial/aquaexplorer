var dates = [
    20030203,
    20030210,
    20030217,
    20030224,
    20030303,
    20030310,
    20030317,
    20030324,
    20030331,
    20030407,
    20030414,
    20030421,
    20030428,
    20030505,
    20030512,
    20030519,
    20030526,
    20030602,
    20030609,
    20030616,
    20030623,
    20030630,
    20030707,
    20030714,
    20030721,
    20030728,
    20030804,
    20030811,
    20030818,
    20030825,
    20030901,
    20030908,
    20030915,
    20030922,
    20030929,
    20031006,
    20031013,
    20031020,
    20031027,
    20031103,
    20031110,
    20031117,
    20031124,
    20031201,
    20031208,
    20031215,
    20031222,
    20031229,
    20040105,
    20040112,
    20040119,
    20040126,
    20040202,
    20040209,
    20040216,
    20040223,
    20040301,
    20040308,
    20040315,
    20040322,
    20040329,
    20040405,
    20040412,
    20040419,
    20040426,
    20040503,
    20040510,
    20040517,
    20040524,
    20040531,
    20040607,
    20040614,
    20040621,
    20040628,
    20040705,
    20040712,
    20040719,
    20040726,
    20040802,
    20040809,
    20040816,
    20040823,
    20040830,
    20040906,
    20040913,
    20040920,
    20040927,
    20041004,
    20041011,
    20041018,
    20041025,
    20041101,
    20041108,
    20041115,
    20041122,
    20041129,
    20041206,
    20041213,
    20041220,
    20041227,
    20050103,
    20050110,
    20050117,
    20050124,
    20050131,
    20050207,
    20050214,
    20050221,
    20050228,
    20050307,
    20050314,
    20050321,
    20050328,
    20050404,
    20050411,
    20050418,
    20050425,
    20050502,
    20050509,
    20050516,
    20050523,
    20050530,
    20050606,
    20050613,
    20050620,
    20050627,
    20050704,
    20050711,
    20050718,
    20050725,
    20050801,
    20050808,
    20050815,
    20050822,
    20050829,
    20050905,
    20050912,
    20050919,
    20050926,
    20051003,
    20051010,
    20051017,
    20051024,
    20051031,
    20051107,
    20051114,
    20051121,
    20051128,
    20051205,
    20051212,
    20051219,
    20051226,
    20060102,
    20060109,
    20060116,
    20060123,
    20060130,
    20060206,
    20060213,
    20060220,
    20060227,
    20060306,
    20060313,
    20060320,
    20060327,
    20060403,
    20060410,
    20060417,
    20060424,
    20060501,
    20060508,
    20060515,
    20060522,
    20060529,
    20060605,
    20060612,
    20060619,
    20060626,
    20060703,
    20060710,
    20060717,
    20060724,
    20060731,
    20060807,
    20060814,
    20060821,
    20060828,
    20060904,
    20060911,
    20060918,
    20060925,
    20061002,
    20061009,
    20061016,
    20061023,
    20061030,
    20061106,
    20061113,
    20061120,
    20061127,
    20061204,
    20061211,
    20061218,
    20061225,
    20070101,
    20070108,
    20070115,
    20070122,
    20070129,
    20070205,
    20070212,
    20070219,
    20070226,
    20070305,
    20070312,
    20070319,
    20070326,
    20070402,
    20070409,
    20070416,
    20070423,
    20070430,
    20070507,
    20070514,
    20070521,
    20070528,
    20070604,
    20070611,
    20070618,
    20070625,
    20070702,
    20070709,
    20070716,
    20070723,
    20070730,
    20070806,
    20070813,
    20070820,
    20070827,
    20070903,
    20070910,
    20070917,
    20070924,
    20071001,
    20071008,
    20071015,
    20071022,
    20071029,
    20071105,
    20071112,
    20071119,
    20071126,
    20071203,
    20071210,
    20071217,
    20071224,
    20071231,
    20080107,
    20080114,
    20080121,
    20080128,
    20080204,
    20080211,
    20080218,
    20080225,
    20080303,
    20080310,
    20080317,
    20080324,
    20080331,
    20080407,
    20080414,
    20080421,
    20080428,
    20080505,
    20080512,
    20080519,
    20080526,
    20080602,
    20080609,
    20080616,
    20080623,
    20080630,
    20080707,
    20080714,
    20080721,
    20080728,
    20080804,
    20080811,
    20080818,
    20080825,
    20080901,
    20080908,
    20080915,
    20080922,
    20080929,
    20081006,
    20081013,
    20081020,
    20081027,
    20081103,
    20081110,
    20081117,
    20081124,
    20081201,
    20081208,
    20081215,
    20081222,
    20081229,
    20090105,
    20090112,
    20090119,
    20090126,
    20090202,
    20090209,
    20090216,
    20090223,
    20090302,
    20090309,
    20090316,
    20090323,
    20090330,
    20090406,
    20090413,
    20090420,
    20090427,
    20090504,
    20090511,
    20090518,
    20090525,
    20090601,
    20090608,
    20090615,
    20090622,
    20090629,
    20090706,
    20090713,
    20090720,
    20090727,
    20090803,
    20090810,
    20090817,
    20090824,
    20090831,
    20090907,
    20090914,
    20090921,
    20090928,
    20091005,
    20091012,
    20091019,
    20091026,
    20091102,
    20091109,
    20091116,
    20091123,
    20091130,
    20091207,
    20091214,
    20091221,
    20091228,
    20100104,
    20100111,
    20100118,
    20100125,
    20100201,
    20100208,
    20100215,
    20100222,
    20100301,
    20100308,
    20100315,
    20100322,
    20100329,
    20100405,
    20100412,
    20100419,
    20100426,
    20100503,
    20100510,
    20100517,
    20100524,
    20100531,
    20100607,
    20100614,
    20100621,
    20100628,
    20100705,
    20100712,
    20100719,
    20100726,
    20100802,
    20100809,
    20100816,
    20100823,
    20100830,
    20100906,
    20100913,
    20100920,
    20100927,
    20101004,
    20101011,
    20101018,
    20101025,
    20101101,
    20101108,
    20101115,
    20101122,
    20101129,
    20101206,
    20101213,
    20101220,
    20101227,
    20110103,
    20110110,
    20110117,
    20110124,
    20110131,
    20110207,
    20110214,
    20110221,
    20110228,
    20110307,
    20110314,
    20110321,
    20110328,
    20110404,
    20110411,
    20110418,
    20110425,
    20110502,
    20110509,
    20110516,
    20110523,
    20110530,
    20110606,
    20110613,
    20110620,
    20110627,
    20110704,
    20110711,
    20110718,
    20110725,
    20110801,
    20110808,
    20110815,
    20110822,
    20110829,
    20110905,
    20110912,
    20110919,
    20110926,
    20111003,
    20111010,
    20111017,
    20111024,
    20111031,
    20111107,
    20111114,
    20111121,
    20111128,
    20111205,
    20111212,
    20111219,
    20111226,
    20120102,
    20120109,
    20120116,
    20120123,
    20120130,
    20120206,
    20120213,
    20120220,
    20120227,
    20120305,
    20120312,
    20120319,
    20120326,
    20120402,
    20120409,
    20120416,
    20120423,
    20120430,
    20120507,
    20120514,
    20120521,
    20120528,
    20120604,
    20120611,
    20120618,
    20120625,
    20120702,
    20120709,
    20120716,
    20120723,
    20120730,
    20120806,
    20120813,
    20120820,
    20120827,
    20120903,
    20120910,
    20120917,
    20120924,
    20121001,
    20121008,
    20121015,
    20121022,
    20121029,
    20121105,
    20121112,
    20121119,
    20121126,
    20121203,
    20121210,
    20121217,
    20121224,
    20121231,
    20130107,
    20130114,
    20130121,
    20130128,
    20130204,
    20130211,
    20130218,
    20130225,
    20130304,
    20130311,
    20130318,
    20130325,
    20130401,
    20130408,
    20130415,
    20130422,
    20130429,
    20130506,
    20130513,
    20130520,
    20130527,
    20130603,
    20130610,
    20130617,
    20130624,
    20130701,
    20130708,
    20130715,
    20130722,
    20130729,
    20130805,
    20130812,
    20130819,
    20130826,
    20130902,
    20130909,
    20130916,
    20130923,
    20130930,
    20131007,
    20131014,
    20131021,
    20131028,
    20131104,
    20131111,
    20131118,
    20131125,
    20131202,
    20131209,
    20131216,
    20131223,
    20131230,
    20140106,
    20140113,
    20140120,
    20140127,
    20140203,
    20140210,
    20140217,
    20140224,
    20140303,
    20140310,
    20140317,
    20140324,
    20140331,
    20140407,
    20140414,
    20140421,
    20140428,
    20140505,
    20140512,
    20140519,
    20140526,
    20140602,
    20140609,
    20140616,
    20140623,
    20140630,
    20140707,
    20140714,
    20140721,
    20140728,
    20140804,
    20140811,
    20140818,
    20140825,
    20140901,
    20140908,
    20140915,
    20140922,
    20140929,
    20141006,
    20141013,
    20141020,
    20141027,
    20141103,
    20141110,
    20141117,
    20141124,
    20141201,
    20141208,
    20141215,
    20141222,
    20141229,
    20150105,
    20150112,
    20150119,
    20150126,
    20150202,
    20150209,
    20150216,
    20150223,
    20150302,
    20150309,
    20150316,
    20150323,
    20150330,
    20150406,
    20150413,
    20150420,
    20150427,
    20150504,
    20150511,
    20150518,
    20150525,
    20150601,
    20150608,
    20150615,
    20150622,
    20150629,
    20150706,
    20150713,
    20150720,
    20150727,
    20150803,
    20150810,
    20150817,
    20150824,
    20150831,
    20150907,
    20150914,
    20150921,
    20150928,
    20151005,
    20151012,
    20151019,
    20151026,
    20151102,
    20151109,
    20151116,
    20151123,
    20151130,
    20151207,
    20151214,
    20151221,
    20151228,
    20160104,
    20160111,
    20160118,
    20160125,
    20160201,
    20160208,
    20160215,
    20160222,
    20160229,
    20160307,
    20160314,
    20160321,
    20160328,
    20160404,
    20160411,
    20160418,
    20160425,
    20160502,
    20160509,
    20160516,
    20160523,
    20160530,
    20160606,
    20160613,
    20160620,
    20160627,
    20160704,
    20160711,
    20160718,
    20160725,
    20160801,
    20160808,
    20160815,
    20160822,
    20160829,
    20160905,
    20160912,
    20160919,
    20160926,
    20161003,
    20161010,
    20161017,
    20161024,
    20161031,
    20161107,
    20161114,
    20161121,
    20161128,
    20161205,
    20161212,
    20161219,
    20161226,
    20170102,
    20170109,
    20170116,
    20170123,
    20170130,
    20170206,
    20170213,
    20170220,
    20170227,
    20170306,
    20170313,
    20170320,
    20170327,
    20170403,
    20170410,
    20170417,
    20170424,
    20170501,
    20170508,
    20170515,
    20170522,
    20170529,
    20170605,
    20170612,
    20170619,
    20170626,
    20170703,
    20170710,
    20170717,
    20170724,
    20170731,
    20170807,
    20170814,
    20170821,
    20170828,
    20170904,
    20170911,
    20170918,
    20170925,
    20171002,
    20171009,
    20171016,
    20171023,
    20171030,
    20171106,
    20171113,
    20171120,
    20171127,
    20171204,
    20171211,
    20171218,
    20171225,
    20180101,
    20180108,
    20180115,
    20180122,
    20180129,
    20180205,
    20180212,
    20180219,
    20180226,
    20180305,
    20180312,
    20180319,
    20180326,
    20180402,
    20180409,
    20180416,
    20180423,
    20180430,
    20180507,
    20180514,
    20180521,
    20180528,
    20180604,
    20180611,
    20180618,
    20180625,
    20180702,
    20180709,
    20180716,
    20180723,
    20180730,
    20180806,
    20180813,
    20180820,
    20180827,
    20180903,
    20180910,
    20180917,
    20180924,
    20181001,
    20181008,
    20181015,
    20181022,
    20181029,
    20181105,
    20181112,
    20181119,
    20181126,
    20181203,
    20181210,
    20181217,
    20181224,
    20181231,
    20190107,
    20190114,
    20190121,
    20190128,
    20190204,
    20190211,
    20190218,
    20190225,
    20190304,
    20190311,
    20190318,
    20190325,
    20190401,
    20190408,
    20190415,
    20190422,
    20190429,
    20190506,
    20190513,
    20190520,
    20190527,
    20190603,
    20190610,
    20190617,
    20190624,
    20190701,
    20190708,
    20190715,
    20190722,
    20190729,
    20190805,
    20190812,
    20190819,
    20190826,
    20190902,
    20190909,
    20190916,
    20190923,
    20190930,
    20191007,
    20191014,
    20191021,
    20191028,
    20191104,
    20191111,
    20191118,
    20191125,
    20191202,
    20191209,
    20191216,
    20191223,
    20191230,
    20200106,
    20200113,
    20200120,
    20200127,
    20200203,
    20200210,
    20200217,
    20200224,
    20200302,
    20200309,
    20200316,
    20200323,
    20200330,
    20200406,
    20200413,
    20200420,
    20200427,
    20200504,
    20200511,
    20200518,
    20200525,
    20200601,
    20200608,
    20200615,
    20200622,
    20200629,
    20200706,
    20200713,
    20200720,
    20200727,
    20200803,
    20200810,
    20200817,
    20200824,
    20200831,
    20200907,
    20200914,
    20200921,
    20200928,
    20201005,
    20201012,
    20201019,
    20201026,
    20201102,
    20201109,
    20201116,
    20201123,
    20201130,
    20201207,
    20201214,
    20201221,
    20201228,
    20210104,
    20210111,
    20210118,
    20210125,
    20210201,
    20210208,
    20210215,
    20210222,
    20210301,
    20210308,
    20210315,
    20210322,
    20210329,
    20210405,
    20210412,
    20210419,
    20210426,
    20210503,
    20210510,
    20210517,
    20210524,
    20210531,
    20210607,
    20210614,
    20210621,
    20210628,
    20210705,
    20210712,
    20210719,
    20210726,
    20210802,
    20210809,
    20210816,
    20210823,
    20210830,
    20210906,
    20210913,
    20210920,
    20210927,
    20211004,
    20211011,
    20211018,
    20211025,
    20211101,
    20211108,
    20211115,
    20211122,
    20211129,
    20211206,
    20211213,
    20211220,
    20211227,
    20220103,
    20220110,
    20220117,
    20220124,
    20220131,
    20220207,
    20220214,
    20220221,
    20220228,
    20220307,
    20220314,
    20220321,
    20220328,
    20220404,
    20220411,
    20220418,
    20220425,
    20220502,
    20220509,
    20220516,
    20220523,
    20220530,
    20220606,
    20220613,
    20220620,
    20220627,
    20220704,
    20220711,
    20220718,
    20220725,
    20220801,
    20220808,
    20220815,
    20220822,
    20220829,
    20220905,
    20220912,
    20220919,
    20220926,
    20221003,
    20221010,
    20221017,
    20221024,
    20221031,
    20221107,
    20221114,
    20221121,
    20221128,
    20221205,
    20221212,
    20221219,
    20221226,
    20230102,
    20230109,
    20230116,
    20230123,
    20230130,
    20230206,
    20230213,
    20230220,
    20230227,
    20230306,
    20230313,
    20230320,
    20230327,
    20230403,
    20230410,
    20230417,
    20230424,
    20230501,
    20230508,
    20230515,
    20230522,
    20230529,
];