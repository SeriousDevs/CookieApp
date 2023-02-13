﻿// <auto-generated />
using CookieData.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace CookieData.Migrations
{
    [DbContext(typeof(CookieContext))]
    partial class CookieContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("CookieData.Entities.ClickUpgrade", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ClickUpgradeId");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("CurrentValue")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("GameAccountId")
                        .HasColumnType("int");

                    b.Property<long>("Level")
                        .HasColumnType("bigint");

                    b.Property<int>("UpgradeInfoId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("GameAccountId")
                        .IsUnique();

                    b.HasIndex("UpgradeInfoId");

                    b.ToTable("ClickUpgrade", (string)null);
                });

            modelBuilder.Entity("CookieData.Entities.FairyTail", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("FairyTailId");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Image")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Story")
                        .IsRequired()
                        .HasMaxLength(1000)
                        .HasColumnType("nvarchar(1000)");

                    b.Property<double>("Trigger")
                        .HasColumnType("float");

                    b.HasKey("Id");

                    b.ToTable("FairyTail", (string)null);
                });

            modelBuilder.Entity("CookieData.Entities.GameAccount", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("GameAccountId");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Clicks")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Cookies")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Networth")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("GameAccount", (string)null);
                });

            modelBuilder.Entity("CookieData.Entities.Upgrade", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("UpgradeId");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<long>("Amount")
                        .HasColumnType("bigint");

                    b.Property<string>("CurrentValue")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("GameAccountId")
                        .HasColumnType("int");

                    b.Property<long>("Level")
                        .HasColumnType("bigint");

                    b.Property<int>("UpgradeInfoId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("GameAccountId");

                    b.HasIndex("UpgradeInfoId");

                    b.ToTable("Upgrade", (string)null);
                });

            modelBuilder.Entity("CookieData.Entities.UpgradeInfo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("UpgradeInfoId");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("BasePrice")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("BaseValue")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Image")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LvlImage")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("Id");

                    b.ToTable("UpgradeInfo", (string)null);
                });

            modelBuilder.Entity("CookieData.Entities.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("UserId");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<int>("GameAccountId")
                        .HasColumnType("int");

                    b.Property<string>("Login")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasMaxLength(500)
                        .HasColumnType("nvarchar(500)");

                    b.HasKey("Id");

                    b.HasIndex("GameAccountId")
                        .IsUnique();

                    b.ToTable("User", (string)null);
                });

            modelBuilder.Entity("CookieData.Entities.ClickUpgrade", b =>
                {
                    b.HasOne("CookieData.Entities.GameAccount", "GameAccount")
                        .WithOne("ClickUpgrade")
                        .HasForeignKey("CookieData.Entities.ClickUpgrade", "GameAccountId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("CookieData.Entities.UpgradeInfo", "UpgradeInfo")
                        .WithMany("ClickUpgrades")
                        .HasForeignKey("UpgradeInfoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("GameAccount");

                    b.Navigation("UpgradeInfo");
                });

            modelBuilder.Entity("CookieData.Entities.Upgrade", b =>
                {
                    b.HasOne("CookieData.Entities.GameAccount", "GameAccount")
                        .WithMany("Upgrades")
                        .HasForeignKey("GameAccountId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("CookieData.Entities.UpgradeInfo", "UpgradeInfo")
                        .WithMany("Upgrades")
                        .HasForeignKey("UpgradeInfoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("GameAccount");

                    b.Navigation("UpgradeInfo");
                });

            modelBuilder.Entity("CookieData.Entities.User", b =>
                {
                    b.HasOne("CookieData.Entities.GameAccount", "GameAccount")
                        .WithOne("User")
                        .HasForeignKey("CookieData.Entities.User", "GameAccountId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("GameAccount");
                });

            modelBuilder.Entity("CookieData.Entities.GameAccount", b =>
                {
                    b.Navigation("ClickUpgrade")
                        .IsRequired();

                    b.Navigation("Upgrades");

                    b.Navigation("User")
                        .IsRequired();
                });

            modelBuilder.Entity("CookieData.Entities.UpgradeInfo", b =>
                {
                    b.Navigation("ClickUpgrades");

                    b.Navigation("Upgrades");
                });
#pragma warning restore 612, 618
        }
    }
}
